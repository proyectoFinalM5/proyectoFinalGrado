import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  comercio: Comercio = {} as Comercio;
  categorias: string[];
  loading: boolean = false;
  mapa: Mapa;

  constructor(private service: ComercioService,
    private activatedRouter: ActivatedRoute,
    private form: FormBuilder,
    private router: Router,
    private firebaseStorage: FirebaseStorageService) { }

  ngOnInit(): void {
    this.categorias = this.service.getCategorias();
    this.mapa = new Mapa();
    this.getComercio();
    this.iniciarForm();
    this.mapa.on("click", (event) => {
      const { lng, lat } = event.lngLat;
      this.comercio.coordinates = [lng, lat]
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
      coordinates: [{ value: [], disabled: true }],
      redes_sociales: '',
      telefono: ['', [Validators.required]],
      descripcion: '',
      categoria: '',
      logo: '',
    });
  }
  llenarform() {
    Object.keys(this.group.value).forEach(x => {
      const values = Object.entries(this.comercio);
      this.group.controls[x].setValue(values.find(col => col[0] === x)?.[1] || "")
    })
  }
  async enviarPost() {
    if (this.group.valid) {
      await this.subirLogo()
      this.service.agregarComercio(this.comercio);
      this.router.navigateByUrl('/comercio');
    }
  }
  async editarComercio() {
    if (this.group.valid) {
      await this.subirLogo()
      this.service.actualizarComercio(this.comercio._id, this.comercio);
      this.router.navigateByUrl('/comercio');
    }
  }
  comercioExist() {
    return this.comercio._id === undefined;
  }
  async subirLogo() {
    const { files, fileNames } = this.group.get('logo')?.value;
    console.log(files)
    if (files?.length > 0) {
      const ref = this.firebaseStorage.referenciaCloudStorage(fileNames);
      let task = this.firebaseStorage.tareaCloudStorage(fileNames, files[0]);
      await task.snapshotChanges().toPromise()
      const url = await ref.getDownloadURL().toPromise()
      this.comercio.logo = url
    }
  }
}
