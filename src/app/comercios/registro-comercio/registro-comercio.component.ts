import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ComercioService } from 'src/app/services/comercio.service';
import { Comercio } from 'src/app/entidades/comercio';
import { Mapa } from 'src/app/generarMapa';
import { FirebaseStorageService } from 'src/app/services/firebase-storage.service';


@Component({
  selector: 'app-registro-comercio',
  templateUrl: './registro-comercio.component.html',
  styleUrls: ['./registro-comercio.component.scss']
})
export class RegistroComercioComponent implements OnInit {

  group: FormGroup;
  hide: boolean = true;
  categorias: string[];
  loading: boolean = false;
  comercio: Comercio = {} as Comercio;
  mapa: Mapa;

  constructor(private service: ComercioService,
    private activatedRouter: ActivatedRoute,
    private form: FormBuilder,
    private firebaseStorage: FirebaseStorageService) { }

  ngOnInit(): void {
    this.categorias = this.service.getCategorias();
    this.getComercio();
    this.iniciarForm();
    this.mapa = new Mapa();
    this.mapa.on("click", (event) => {
      const { lng, lat } = event.lngLat;
      this.group.get("coordinates")?.setValue([lng, lat]);
    })
  }
  async getComercio() {
    const id = this.activatedRouter.snapshot.params.id;
    if (id) {
      this.loading = true;
      this.comercio = await this.service.getComercio(id);
      this.llenarform();
      this.loading = false;
    }
  }
  iniciarForm() {
    this.group = this.form.group({
      nombre: ['', [Validators.required]],
      propietario: ['', [Validators.required]],
      coordinates: [[], Validators.required],
      redes_sociales: '',
      telefono: ['', [Validators.required]],
      descripcion: '',
      categoria: this.categorias[0],
      logo: '',
    });
  }
  llenarform() {
    console.log(this.comercio)
    const values = Object.entries(this.comercio);
    Object.keys(this.group.value).forEach(x => {
      this.group.controls[x]?.setValue(values.find(col => col[0] === x)?.[1] || "")
    })
  }
  async enviarPost() {
    if (this.group.valid) {
      await this.subirLogo()
      this.llenarComercio()
      console.log(this.comercio)
      await this.service.agregarComercio(this.comercio).then(x => {
        window.location.href = "/comercio"
      })
    }
  }
  llenarComercio() {
    const { nombre, propietario, coordinates, redes_sociales, telefono, descripcion, categoria } = this.group.value;
    this.comercio = { ...this.comercio, nombre, propietario, coordinates, redes_sociales, telefono, descripcion, categoria };
  }
  async editarComercio() {
    if (this.group.valid) {
      await this.subirLogo()
      this.llenarComercio()
      this.service.actualizarComercio(this.comercio._id, this.comercio).then(x => {
        window.location.href = "/comercio"
      })
    }
  }
  comercioExist() {
    return this.comercio._id === undefined;
  }
  async subirLogo() {
    const { files, fileNames } = this.group.get('logo')?.value;
    if (files?.length > 0) {
      const ref = this.firebaseStorage.referenciaCloudStorage(fileNames);
      let task = this.firebaseStorage.tareaCloudStorage(fileNames, files[0]);
      await task.snapshotChanges().toPromise()
      const url = await ref.getDownloadURL().toPromise()
      this.comercio.logo = url
    }
  }
}
