import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RequestService } from 'src/app/services/request.service';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.scss']
})
export class RegistroUsuariosComponent implements OnInit {
  title= 'NUEVO USUARIO';
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  usuarioForm: FormGroup;
  id:string|null;

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  constructor(
    public dialogRef: MatDialogRef<RegistroUsuariosComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    private Form: FormBuilder) { }

  ngOnInit(): void {
  }
  

}
