import { Component, OnInit } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit{

  mapa:Mapboxgl.Map;
  title = 'proyectomapa';

  ngOnInit(){

    (Mapboxgl as any).accessToken = environment.tokenmapa;
   this.mapa = new Mapboxgl.Map({
    //container: 'contenedormapa',
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center:[-88.94,14.04 ],
    //zoom:16.6
    zoom: 13
    });

    ///
    //consultar todos los comercios
    var establecimientos=[
          {lon:-88.93968893127821,lat:14.040098665086017,nombre:'Comercio 1',id:'id1'},
          {lon:-88.9396001546189,lat:14.040006628328758,nombre:'Comercio 2',id:'id2'},
          {lon:-88.93942044660623,lat:14.039866115824907,nombre:'Comercio 3',id:'id3'},
          {lon:-88.93924140914588,lat:14.03985635800893,nombre:'Comercio 4',id:'id4'}
    ]
    establecimientos.forEach(comercio => {
      this.marcador(comercio.lon,comercio.lat,comercio.nombre);
    });

  }

  //Puede evaluar enviar el objeto comercio y no propiedades por separado
  marcador(lon:number,lat:number,nombre:string){

    const globo= new Mapboxgl.Popup({className:'globito'})
                .setHTML(`<p> ${nombre} </p>`)

    const marca=new Mapboxgl.Marker({
      draggable:false,
      color:"orange"
    })
    .setLngLat([lon,lat])
    .setPopup(globo)
    .addTo(this.mapa);

    marca.on;

  }
}
