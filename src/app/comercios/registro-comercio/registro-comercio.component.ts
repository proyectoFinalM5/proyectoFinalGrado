import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ComercioService } from 'src/app/services/comercio.service';
import { Comercio } from 'src/app/entidades/comercio';
import { Mapa } from 'src/app/generarMapa';


@Component({
  selector: 'app-registro-comercio',
  templateUrl: './registro-comercio.component.html',
  styleUrls: ['./registro-comercio.component.scss']
})
export class RegistroComercioComponent implements OnInit {

  group: FormGroup;
  comercio: Comercio = {} as Comercio;
  categorias: string[];
  loading: boolean = false;
  mapa: Mapa;

  constructor(private service: ComercioService, private activatedRouter: ActivatedRoute, private form: FormBuilder) { }

  ngOnInit(): void {
    this.categorias = this.service.getCategorias();
    this.mapa = new Mapa();
    this.getComercio();
    this.iniciarForm();
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
      longitud: ['', [Validators.required]],
      latitud: ['', [Validators.required]],
      propietario: ['', [Validators.required]],
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
  enviarPost() {
    if (this.group.valid) {
      const latitud = this.group.get('latitud')?.value;
      const longitud = this.group.get('longitud')?.value;
      this.comercio.coordinates = [longitud, latitud];
      this.service.agregarComercio(this.comercio);
    }
  }
  editarComercio() {
    if (this.group.valid) {
      console.log(this.comercio._id)
      this.service.actualizarComercio(this.comercio._id, this.comercio)
        .then(() => {
        })
    }
  }
  comercioExist() {
    return this.comercio._id === undefined;
  }
}
