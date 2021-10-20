import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ComercioService } from 'src/app/services/comercio.service';
import { Comercio } from 'src/app/entidades/comercio';


@Component({
  selector: 'app-registro-comercio',
  templateUrl: './registro-comercio.component.html',
  styleUrls: ['./registro-comercio.component.scss']
})
export class RegistroComercioComponent implements OnInit {

  group: FormGroup;
  comercio: Comercio = {} as Comercio;
  categorias: string[];

  constructor(private service: ComercioService, private activatedRouter: ActivatedRoute, private form: FormBuilder) { }

  ngOnInit(): void {
    this.categorias = this.service.getCategorias()
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
    // this.comercio = this.data['comercio'] || {}
  }

  enviarPost() {
    const latitud = this.group.get('latitud')?.value;
    const longitud = this.group.get('longitud')?.value;
    this.comercio.coordinates = [longitud, latitud];
    this.service.agregarComercio(this.comercio);
  }

  editarComercio() {
    this.service.actualizarComercio(this.comercio._id, this.comercio)
      .then(() => {
      })
  }
  comercioExist() {
    return this.comercio._id === undefined;
  }
}
