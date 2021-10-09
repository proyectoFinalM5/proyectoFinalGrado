import { Component, Input, OnInit } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { Comercio } from 'src/app/entidades/comercio';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit {


  @Input() comercios!: Comercio[];

  mapa: Mapboxgl.Map;
  title = 'proyectomapa';

  ngOnInit() {
    (Mapboxgl as any).accessToken = environment.tokenmapa;
    this.mapa = new Mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-88.94, 14.04],
      zoom: 13,
    });

    this.comercios = [
      {
        id: '1',
        nombre: 'Comercio 1',
        coordinates: [
          -88.93968893127821,
          14.040098665086017,
        ],
        propietario: 'Juan Perez',
        redes_sociales: 'Facebook',
        telefono: '77886655',
        descripcion: 'Venta de ropa',
        categoria: 'ropa',
        logo: 'ashgdhfds'
      },
      {
        id: '2',
        nombre: 'Comercio 2',
        coordinates: [
          -88.94102112000847,
          14.04094151438958,
        ],
        propietario: 'Juan Perez',
        redes_sociales: 'Facebook',
        telefono: '77886655',
        descripcion: 'Venta de ropa',
        categoria: 'ropa',
        logo: 'ashgdhfds'
      },
    ];

    this.comercios.forEach((comercio) => {
      this.marcador(comercio);
    });
  }

  marcador(comercio: Comercio) {
    const { coordinates, nombre, propietario } = comercio;
    const [lon, lat] = coordinates;

    const globo = new Mapboxgl.Popup({ className: 'globito' }).setHTML(
      `<p>Comercio: ${nombre} <br> Propietario: ${propietario} </p>`
    );

    const marca = new Mapboxgl.Marker({
      draggable: false,
      color: 'orange',
    })
      .setLngLat([lon, lat])
      .setPopup(globo)
      .addTo(this.mapa);

    marca.on;
  }
}
