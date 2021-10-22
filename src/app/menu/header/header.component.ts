import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/entidades/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  @Input() usuario: Usuario;
  @Input() title: string = ''
  nombreU: string;
  public show: boolean = false;

  constructor(private router: Router, private authService: AuthService, private userService: UsuarioService) {}

  ngOnInit(): void {
    this.obtenerNU();
    this.usuario = this.authService.getUsuario();
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
    this.show = !this.show;
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
