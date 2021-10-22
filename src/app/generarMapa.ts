import { Comercio } from './entidades/comercio';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
(Mapboxgl as any).accessToken = environment.tokenmapa;
export class Mapa extends Mapboxgl.Map {
  opcion: string
  constructor() {
    super({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-88.9368898, 14.0423539],
      zoom: 15,
    });

    this.addControl(
      new Mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true,
        showUserHeading: true
      })
    );
  }

  addMarcador(comercio: Comercio) {
    const [lon, lat] = comercio.coordinates;
    const globo = new Mapboxgl.Popup({ className: 'globito' }).setHTML(
      `
      <h1 style="text-align: center; color: black !important;">
      ${comercio.nombre}
      </h1>
      <p style="font-size: 100%;">
      ${comercio.propietario}
      </p>
      <p style="font-size: 100%;">
      ${comercio.descripcion}
      </p>`
    );

    const marca = new Mapboxgl.Marker({
      draggable: false,
      color: 'orange',
    })
      .setLngLat([lon, lat])
      .setPopup(globo)
      .addTo(this);
    marca.on;
  }
  seleccionar(comercio: Comercio) {
    const [lon, lat] = comercio.coordinates;
    this.flyTo({
      center: [lon, lat],
      zoom: 20,
    });
  }

  changeTema(opcion: string) {
    this.setStyle('mapbox://styles/mapbox/' + opcion);
  }
}
