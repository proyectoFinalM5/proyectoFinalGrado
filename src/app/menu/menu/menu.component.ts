import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  sideBarOpen = true;
  titulo = "LISTADO USUARIO";

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  constructor() { }

  ngOnInit(): void {
  }

  ObtenerTitulo(){
    this.titulo= this.titulo;

    const ruta = "/usuario"
    const s=["","usuario"];
    const [nulo, tag, subtab, parametro]= ruta.split('/');
    this.titulo= !subtab ? `LISTADO$(tag.toUpperCase())` : `$(subtab.toUpperCase()) $(tag.toUpperCase())`
    }
}
