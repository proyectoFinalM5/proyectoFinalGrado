import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/entidades/usuario';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { RegistrarUsuariosComponent } from '../registrar-usuarios/registrar-usuarios.component';






const CrearTabla: Usuario [] = [
  {id: '1', nombre: 'Javier', apellido: 'Guevara', telefono:'1234-4567', email:'o@gmail.com', password:'123456', rol:'usuario'},
  {id: '2', nombre: 'Byron', apellido: 'Guevara', telefono:'1234-4567', email:'u@gmail.com', password:'123456', rol:'administrador' },
  {id: '3', nombre: 'Karen', apellido: 'Guevara', telefono:'1234-4567', email:'r@gmail.com', password:'123456', rol:'usuario' },
  {id: '4', nombre: 'Giovanni', apellido: 'Guevara', telefono:'1234-4567', email:'w@gmail.com', password:'123456', rol:'usuario' },
  {id: '5', nombre: 'Karen', apellido: 'Guevara', telefono:'1234-4567', email:'w@gmail.com', password:'123456', rol:'usuario' },
  {id: '6', nombre: 'Javier', apellido: 'Guevara', telefono:'1234-4567', email:'m@gmail.com', password:'123456', rol:'administrador'},
  {id: '7', nombre: 'Javier', apellido: 'Guevara', telefono:'1234-4567', email:'m@gmail.com', password:'123456', rol:'administrador'},
  {id: '8', nombre: 'Javier', apellido: 'Guevara', telefono:'1234-4567', email:'m@gmail.com', password:'123456', rol:'usuario'},
  {id: '9', nombre: 'Javier', apellido: 'Guevara', telefono:'1234-4567', email:'m@gmail.com', password:'123456', rol:'usuario' },
  {id: '10', nombre: 'Javier', apellido: 'Guevara', telefono:'1234-4567', email:'m@gmail.com', password:'123456', rol:'administrador' },
];





@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})

export class UsuariosComponent implements OnInit {
  id: string | null;
  title= 'LISTADO USUARIOS';
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'telefono', 'email',  'rol', 'acciones'];
  dataSource = new MatTableDataSource(CrearTabla);
  
  
constructor(private dialog: MatDialog) {}
  
    
  ngOnInit(): void {
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(){
    this.dialog.open(RegistrarUsuariosComponent)
  }

 

    
  
   
}


