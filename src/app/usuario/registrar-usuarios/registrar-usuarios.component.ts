import { Component, OnInit , Inject} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-registrar-usuarios',
  templateUrl: './registrar-usuarios.component.html',
  styleUrls: ['./registrar-usuarios.component.scss']
})
export class RegistrarUsuariosComponent implements OnInit {
  title= 'NUEVO USUARIO';
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  
}
  

  constructor(public dialogRef: MatDialogRef<RegistrarUsuariosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

   
  

  ngOnInit(): void {
    
  }


}
