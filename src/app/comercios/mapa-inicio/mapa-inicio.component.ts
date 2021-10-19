import { Component, OnInit } from '@angular/core';

import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mapa-inicio',
  templateUrl: './mapa-inicio.component.html',
  styleUrls: ['./mapa-inicio.component.scss']
})
export class MapaInicioComponent implements OnInit {

  mapa: Mapboxgl.Map;

  constructor() { }

  ngOnInit(): void {
    this.mostrarMapa();
  }

  mostrarMapa() {
    (Mapboxgl as any).accessToken = environment.tokenmapa;
    this.mapa = new Mapboxgl.Map({
     container: 'map',
     style: 'mapbox://styles/mapbox/streets-v11',
     center:[-88.9368898, 14.0423539],
     zoom:15
    });
  }
}
