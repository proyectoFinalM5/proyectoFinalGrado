import { Mapa } from './../../generarMapa';
import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Comercio } from 'src/app/entidades/comercio';
import { ComercioService } from 'src/app/services/comercio.service';
import * as Mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-listado-comercios',
  templateUrl: './listado-comercios.component.html',
  styleUrls: ['./listado-comercios.component.scss'],
})
export class ListadoComerciosComponent implements OnInit {
  mapa: Mapboxgl.Map;

  listado: Comercio[] = [];
  listadoMapa: Comercio[] = [];

  @ViewChild('templateBottomSheet') TemplateBottomSheet: TemplateRef<any>;

  selectedRating = 0;
  stars = [
    {
      id: 1,
      icon: 'star',
      class: 'star-gray star-hover star',
    },
    {
      id: 2,
      icon: 'star',
      class: 'star-gray star-hover star',
    },
    {
      id: 3,
      icon: 'star',
      class: 'star-gray star-hover star',
    },
    {
      id: 4,
      icon: 'star',
      class: 'star-gray star-hover star',
    },
    {
      id: 5,
      icon: 'star',
      class: 'star-gray star-hover star',
    },
  ];

  constructor(
    private comercioService: ComercioService,
    private bottomSheet: MatBottomSheet
  ) {}

  ngOnInit(): void {
    this.obtenerComercios();
    this.mapa = new Mapa(this.listadoMapa);
  }

  obtenerComercios() {
    this.comercioService.getComercios().subscribe((resp: Comercio[]) => {
      this.listado = resp;
      this.listadoMapa = resp;
    });
  }

  selectStar(value: any): void {
    // prevent multiple selection
    if (this.selectedRating === 0) {
      this.stars.filter((star) => {
        if (star.id <= value) {
          star.class = 'star-gold star';
        } else {
          star.class = 'star-gray star';
        }
        return star;
      });
    }
    this.selectedRating = value;
  }
  /**
   * Para parte de comentarios
   */
  openTemplateSheetMenu() {
    this.bottomSheet.open(this.TemplateBottomSheet);
  }

  closeTemplateSheetMenu() {
    this.bottomSheet.dismiss();
  }
}
