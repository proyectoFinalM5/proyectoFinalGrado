import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/entidades/usuario';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import { RegistroUsuariosComponent } from '../registro-usuarios/registro-usuarios.component';
import { RequestService } from 'src/app/services/request.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})

export class UsuariosComponent implements OnInit {
  usuarioForm: FormGroup;
  title:string= 'LISTADO USUARIOS';

  listadoU: Usuario[] = [];
  
 

 
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'telefono', 'email',  'rol', 'acciones'];
  dataSource = new MatTableDataSource(this.listadoU);
  
constructor(
  private dialog: MatDialog,
  private _snackBar: MatSnackBar,
  private service:UsuarioService){

  
  }
  
    
  ngOnInit(): void {
    this.obtenerUsuarios();
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(){
    this.dialog.open(RegistroUsuariosComponent)
  }

  obtenerUsuarios() {
    this.service.getUsuarios().then((data) => {
      this.listadoU = data;});

  }
    eliminarUsuario(id: string){
      console.log(id);
      
      if(confirm("estas seguro de eliminar este usuario?")){
        this.service.deleteUsuario(id).then(()=>{
          this.obtenerUsuarios();

        })
      }
    }

    obtenerRol(rol: number){
      switch (rol) {
        case 1: return "Administrador"    
        case 2: return "Editor"
        default: return "Usuario"
          
      }

    }

    filterData($event : any){
      this.listadoU.filter = $event.target.value;
    }
  
  }
  







