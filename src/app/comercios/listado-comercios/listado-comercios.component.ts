import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Comercio } from './../../entidades/comercio';
import { ComercioService } from 'src/app/services/comercio.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';
import { Mapa } from 'src/app/generarMapa';
import { Router } from '@angular/router';
import { MatRadioChange, MatRadioGroup } from '@angular/material/radio';

@Component({
  selector: 'app-listado-comercios',
  templateUrl: './listado-comercios.component.html',
  styleUrls: ['./listado-comercios.component.scss'],
})
export class ListadoComerciosComponent implements OnInit {

  mapa: Mapa;
  listado: Comercio[] = [];
  selected: string;
  opciones: string[] = ['streets-v11', 'satellite-v9', 'light-v10', 'dark-v10', 'outdoors-v11'];

  constructor(private service: ComercioService, private _bottomSheet: MatBottomSheet, private router: Router) {
    this.selected = 'streets-v11';
   }

  ngOnInit(): void {
    this.mapa = new Mapa();
    this.obtenerComercios();

  }

  obtenerComercios() {
    this.service.getComercios().then((data) => {
      this.listado = data;
      this.listado.forEach(c => {
        this.mapa.addMarcador(c);
      });
    });
  }

  seleccionarComercio(comercio: Comercio) {
    this.mapa.seleccionar(comercio);
  }

  search(event: KeyboardEvent) {
    if (event.key === "Enter") {
      const nombre = (event.target as HTMLInputElement).value
      this.service.getComercioNombre(nombre).then((data) => {
        this.listado = data;
      });
    }
  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetComponent);
  }
  agregarUsuario() {
    this.router.navigateByUrl('/comercio/registro');
  }
  eliminar(id: string) {
    if (confirm("estas seguro de eliminar este comercio?")) {
      this.service.deleteComercio(id).then(() => {
        this.obtenerComercios();
      })
    }
  }
  onRadioChange(event: MatRadioChange): void {
    this.mapa.changeTema(event.value)

  }
}
