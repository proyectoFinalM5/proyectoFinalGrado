import { Component, OnInit } from '@angular/core';

import * as Mapboxgl from 'mapbox-gl';
import { Mapa } from 'src/app/generarMapa';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mapa-inicio',
  templateUrl: './mapa-inicio.component.html',
  styleUrls: ['./mapa-inicio.component.scss']
})
export class MapaInicioComponent implements OnInit {

  mapa: Mapa;

  constructor() { }

  ngOnInit(): void {
    this.mapa = new Mapa();
  }
}
