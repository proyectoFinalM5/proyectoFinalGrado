
import { Component, OnInit } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';

import { Comercio } from './../../entidades/comercio';
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
  listadoCategoria: Comercio[] = [];

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

      this.listadoMapa.forEach(c => {
        this.crearMarcador(c);

      });
    });
  }

  seleccionarComercio(comercio: Comercio) {
      const [lon,lat] = comercio.coordinates
      this.mapa.flyTo({
        center: [lon,lat],
        zoom: 20
      });
      // console.log('lon: ' + lon + ' ' + ' lat: ' + lat);
  }

  buscarNombreComercio(event: Event) {
    console.log('nombre: ' + (event.target as HTMLInputElement).value);

    this.service.getComercioNombre((event.target as HTMLInputElement).value).then((data) => {
        this.listado = data;
    });

  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetComponent);
  }

  //  this.listadoMapa = this.listado.filter(x => x.id === comercio.id);


  // onSelect(event: Event) {
  //   console.log('Trae: ' + (event.target as HTMLInputElement).value);

  //     this.service.getComercioNombre((event.target as HTMLInputElement).value).then((data) => {
  //       this.listadoCategoria = data;

  //       this.listadoCategoria.forEach(c => {

  //       });
  //     });
  // }


  eliminar(id:string) {
    console.log(id);
    if (confirm("estas seguro de eliminar este comercio?")) {
      this.service.deleteComercioMapa(id).then(() => {
        this.obtenerComercios();
      })
    }
  }




}
