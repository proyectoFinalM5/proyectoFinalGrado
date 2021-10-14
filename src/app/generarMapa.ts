import { Comercio } from './entidades/comercio';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
(Mapboxgl as any).accessToken = environment.tokenmapa;
export class Mapa extends Mapboxgl.Map {
  constructor(private comercios: Comercio[]) {
    super({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-88.94, 14.04],
      zoom: 13,
    });
    this.comercios?.forEach((c) => {
      this.marcador(c);
    });
  }

  marcador(comercio: Comercio) {
    const { coordinates, nombre, categoria, id } = comercio;
    const [lon, lat] = coordinates;

    const globo = new Mapboxgl.Popup({ className: 'globito' }).setHTML(
      `<p>Comercio: ${nombre} <br> Categoria: ${categoria} </p>`
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
}
