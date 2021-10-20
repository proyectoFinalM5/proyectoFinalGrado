import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/entidades/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() usuario: Usuario;

  constructor(private userService: UsuarioService, private authService: AuthService) { }

  ngOnInit(): void {
    this.usuario = this.authService.getUsuario();
  }

  onLogout(): void {
    this.authService.logout();
  }
  deleteCuenta() {
    this.userService.deleteUsuario(this.usuario._id);
    this.onLogout();
  }
}
