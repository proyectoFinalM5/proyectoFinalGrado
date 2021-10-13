import { Comercio } from "./entidades/comercio";
import * as Mapboxgl from 'mapbox-gl';
import { environment } from "src/environments/environment";

export class Mapa {

   mapa: Mapboxgl.Map;

  constructor(private comercios:Comercio[]) {

    console.log(comercios);

    (Mapboxgl as any).accessToken = environment.tokenmapa;
    this.mapa = new Mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-88.94, 14.04],
      zoom: 13,
    });
    this.comercios?.forEach(c => {
      this.marcador(c);
    });
  }

  marcador(comercio: Comercio) {
    const { coordinates, nombre, categoria, id} = comercio;
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
      .addTo(this.mapa);
    marca.on;
  }
}
