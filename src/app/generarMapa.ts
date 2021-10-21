import { Comercio } from './entidades/comercio';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
(Mapboxgl as any).accessToken = environment.tokenmapa;
export class Mapa extends Mapboxgl.Map {
  constructor() {
    super({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-88.9368898, 14.0423539],
      zoom: 15
    });

  }
  addMarcador(comercio: Comercio) {
    const [lon, lat] = comercio.coordinates;
    const globo = new Mapboxgl.Popup({ className: 'globito' })
      .setHTML(`<p> ${comercio.nombre} </p>`)
    const marca = new Mapboxgl.Marker({
      draggable: false,
      color: "orange"
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
      zoom: 20
    });
  }
}
