import { Mapa } from './../../generarMapa';
import { Component, OnInit } from '@angular/core';
import { Comercio } from 'src/app/entidades/comercio';
import * as Mapboxgl from 'mapbox-gl';
import { RequestService } from 'src/app/services/request.service';
import { ComercioService } from 'src/app/services/comercio.service';
import { environment } from 'src/environments/environment';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';

@Component({
  selector: 'app-listado-comercios',
  templateUrl: './listado-comercios.component.html',
  styleUrls: ['./listado-comercios.component.scss'],
})
export class ListadoComerciosComponent implements OnInit {
  mapa: Mapboxgl.Map;

  listado: Comercio[] = [];
  listadoMapa: Comercio[] = [];

  comercio: Comercio

  constructor(private service: ComercioService, private _bottomSheet: MatBottomSheet) {}


  ngOnInit(): void {


    (Mapboxgl as any).accessToken = environment.tokenmapa;
    this.mapa = new Mapboxgl.Map({
     container: 'map',
     style: 'mapbox://styles/mapbox/streets-v11',
     center:[-88.9368898, 14.0423539],
     zoom:15
    });
     this.obtenerComercios();
    //  this.mapa = new Mapa(this.listadoMapa);

  }

  seleccionarComercio(id: string) {
    this.listadoMapa = this.listado.filter(x => x.id === id);
    this.generarMarcadores();
  }

  generarMarcadores(){
    const [lon, lat] = this.comercio.coordinates;
    

    // (Mapboxgl as any).accessToken = environment.tokenmapa;
    // this.mapa = new Mapboxgl.Map({
    //  container: 'map',
    //  style: 'mapbox://styles/mapbox/streets-v11',
    //  center:[-88.93871541135655, 14.042823502825044],
    //  zoom:16
    // });
  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetComponent);
  }

  crearMarcador(comercio: Comercio){
    const [lon, lat] = comercio.coordinates;
    const globo= new Mapboxgl.Popup({className:'globito'})
                .setHTML(`<p> ${comercio.nombre} </p>`)

    const marca=new Mapboxgl.Marker({
      draggable:false,
      color:"orange"
    })
    .setLngLat([lon,lat])
    .setPopup(globo)
    .addTo(this.mapa);

    marca.on;
  }

  obtenerComercios() {
    this.service.getComercios().then((data) => {
      this.listado = data;
      this.listadoMapa = data;
      // this.generarMarcadores();
      this.listadoMapa.forEach(c => {
        this.crearMarcador(c);
      });
    });
  }
}
