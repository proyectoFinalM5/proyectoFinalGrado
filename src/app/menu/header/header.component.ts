import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router, private authService: AuthService, private userService: UsuarioService) {}

  ngOnInit(): void {}

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }


  onLogout(): void {
    this.authService.logout();
  }

  deleteCuenta() {
    // const _id = localStorage.getItem('usuario._id');

    const ID = this.authService.getUsuario();
    this.userService.deleteUsuario(ID._id);
    this.onLogout();
  }
}
