
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

import { Usuario } from 'src/app/entidades/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.scss']
})
export class RegistroUsuariosComponent implements OnInit {
  hide = true;
  usuario: Usuario = {} as Usuario;
  myGroup: FormGroup;
  roles: string[] = ['administrador', 'editor', 'usuario']

  constructor(
    public dialogRef: MatDialogRef<RegistroUsuariosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private aRoute: ActivatedRoute,
    private service: UsuarioService,
  ) {



  }

  ngOnInit(): void {
    this.myGroup = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      rol: new FormControl('', [Validators.required]),
    });

    this.usuario = this.data['usuario']||{}
   
  }

  enviarPost() {
    this.usuario.password = this.myGroup.get('password')?.value
    this.service.agregarUsuario(this.usuario)
      .then(() => {
        this.dialogRef.close()
      })
  }

  editarUsuario() {
    this.usuario.password = this.myGroup.get('password')?.value
    this.service.actualizarUsuario(this.usuario._id, this.usuario)
      .then(() => {
        this.dialogRef.close()
      })
  }



}
