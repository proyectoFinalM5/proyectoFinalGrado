import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ComercioService } from 'src/app/services/comercio.service';
import { Comercio } from 'src/app/entidades/comercio';
import { HttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-registro-comercio',
  templateUrl: './registro-comercio.component.html',
  styleUrls: ['./registro-comercio.component.scss']
})
export class RegistroComercioComponent implements OnInit {
  
  group: FormGroup;
  comercio: Comercio = {} as Comercio;
  categoria: string[] = ['Comedor/Restaurante', 'Banco', 'Ropa', 'Zapatería', 'Juguetería', 'Panadería', 'Bazar', 'Ferretería', 'Farmacia', 'Electrónica', 'Comercial', 'Otro']


  constructor(private service: ComercioService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    private form: FormBuilder) { }

  ngOnInit(): void {
    this.group = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      longitud: new FormControl('', [Validators.required]),
      latitud: new FormControl('', [Validators.required]),
      propietario: new FormControl('', [Validators.required]),
      redes_sociales: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      categoria: new FormControl('', [Validators.required]),
      logo: new FormControl('', [Validators.required]),
    });
    this.comercio = this.data['comercio']||{}
  }
  
}
