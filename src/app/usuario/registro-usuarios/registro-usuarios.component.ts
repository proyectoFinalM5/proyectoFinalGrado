
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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
  email = new FormControl('', [Validators.required, Validators.email]);

  id:string|null;
  editar='Nuevo Usuario'

  usuario:Usuario = {} as Usuario;
  usuarios:any;

  myGroup: FormGroup

  roles:string[]=['administrador', 'editor', 'usuario']


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }



  constructor(
    public dialogRef: MatDialogRef<RegistroUsuariosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ,
    private dialog: MatDialog, 
    private http: HttpClient,
    private aRoute: ActivatedRoute,
    private router: Router,
    private service:UsuarioService,
     ){

      this.id= this.aRoute.snapshot.paramMap.get('id');

      
  this.myGroup = new FormGroup({
    id: new FormControl(null),
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
    email: new FormControl( '', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    rol: new FormControl('', [Validators.required]),
 });


    }

  ngOnInit(): void {
    //this.editarUsuario();
    this.usuario=this.data['usuario']
    console.log(this.usuario);
   
  }

  enviarPost(){
    // this.http.post<Usuario>('https://frozen-meadow-48728.herokuapp.com/registrar', this.usuario)
    this.service.agregarUsuario(this.usuario )
    .subscribe(Response => {
      console.log(Response);
      this.usuario = {} as Usuario;
      //this.router.navigate(['/home/usuario']);
      console.log('obtener' + this.usuario);
     

    })
   // this.router.navigate(['/usuario']);
  }
 
  editarUsuario() {
    if (this.id === null){
      this.editar='Nuevo Usuario'
    }else{
      this.editar='Editar Usuario'
    }
      
  }

  

}