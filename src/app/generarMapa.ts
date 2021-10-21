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
      // When active the map will receive updates to the device's location as it changes.
      trackUserLocation: true,
      // Draw an arrow next to the location dot to indicate which direction the device is heading.
      showUserHeading: true
      })
    );
  }


  }
  addMarcador(comercio: Comercio) {
    const [lon, lat] = comercio.coordinates;
    const globo = new Mapboxgl.Popup({ className: 'globito' }).setHTML(
      `<p> ${comercio.nombre} </p>`
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
    console.log('optiene: ' + opcion);

  }
}
