import { Mapa } from './../../generarMapa';
import { Component, OnInit } from '@angular/core';
import { Comercio } from 'src/app/entidades/comercio';
import * as Mapboxgl from 'mapbox-gl';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-listado-comercios',
  templateUrl: './listado-comercios.component.html',
  styleUrls: ['./listado-comercios.component.scss'],
})
export class ListadoComerciosComponent implements OnInit {
  mapa: Mapboxgl.Map;

  listado: Comercio[] = [];
  listadoMapa: Comercio[] = [];

  constructor(private service: RequestService) {}

  ngOnInit(): void {
    this.obtenerComercios();
    this.mapa = new Mapa(this.listadoMapa);
  }

  obtenerComercios() {
    this.service.getData<Comercio>('/comercio').then((data) => {
      this.listado = data;
      this.listadoMapa = data;
    });
  }
}
