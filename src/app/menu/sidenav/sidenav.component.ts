import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  nombreU: string;
  constructor(private userService: UsuarioService,  private authService: AuthService) { }


  ngOnInit(): void {
    this.obtenerNU();
  }


  obtenerNU() {
    const name = this.authService.getUsuario();
    this.nombreU = name.nombre
    // console.log('devuelve: ' + name.nombre);
  }

  onLogout(): void {
    this.authService.logout();
  }

  deleteCuenta() {
    // const _id = localStorage.getItem('usuario._id');

    const ID = this.authService.getUsuario();
    this.userService.deleteUsuario(ID._id);
    console.log('devuelve: ' + ID._id);

    this.onLogout();
  }

}
