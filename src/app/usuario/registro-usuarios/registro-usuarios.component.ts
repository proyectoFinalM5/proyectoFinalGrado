import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
    private service: UsuarioService,
    private form: FormBuilder
  ) { }

  ngOnInit(): void {
    this.myGroup = this.form.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      rol: ['', [Validators.required]],
    });
    this.usuario = this.data['usuario'] || {}
  }

  enviarPost() {
    this.usuario.password = this.myGroup.get('password')?.value
    this.service.agregarUsuario(this.usuario)
      .then(() => {
        this.dialogRef.close()
        window.location.reload()
      })
  }

  editarUsuario() {
    this.usuario.password = this.myGroup.get('password')?.value
    this.service.actualizarUsuario(this.usuario._id, this.usuario)
      .then(() => {
        this.dialogRef.close()
        window.location.reload()
      })
  }
  usuarioExist() {
    return this.usuario._id === undefined;
  }
}
