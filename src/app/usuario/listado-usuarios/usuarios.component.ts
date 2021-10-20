import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/entidades/usuario';
import { MatDialog } from '@angular/material/dialog';
import { RegistroUsuariosComponent } from '../registro-usuarios/registro-usuarios.component';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})

export class UsuariosComponent implements OnInit {

  title: string = 'LISTADO USUARIOS';
  listado: Usuario[] = [];
  listaCompleta: Usuario[] = [];

  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'telefono', 'email', 'rol', 'acciones'];
  columns: string[] = ['nombre', 'apellido', 'telefono', 'email', 'rol'];
  dataSource: MatTableDataSource<Usuario>;

  constructor(private dialog: MatDialog, private service: UsuarioService) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
    this.dataSource = new MatTableDataSource(this.listado);
  }

  openDialog(usuario?: Usuario) {
    this.dialog.open(RegistroUsuariosComponent, { data: { usuario } })
  }

  obtenerUsuarios() {
    this.service.getUsuarios().then((data) => {
      this.listado = data;
      this.listaCompleta = data;
    });

  }
  eliminarUsuario(id: string) {
    if (confirm("estas seguro de eliminar este usuario?")) {
      this.service.deleteUsuario(id).then(() => {
        this.obtenerUsuarios();
      })
    }
  }
  obtenerRol(rol: number) {
    switch (rol) {
      case 1: return "Administrador"
      case 2: return "Editor"
      default: return "Usuario"

    }
  }

  filterData(event: KeyboardEvent) {
    const value = (event.target as HTMLInputElement).value
    this.listado = this.listaCompleta.filter(x => x.nombre.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
  }

}