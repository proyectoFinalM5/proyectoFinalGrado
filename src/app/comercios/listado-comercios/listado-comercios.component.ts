import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Comercio } from './../../entidades/comercio';
import { ComercioService } from 'src/app/services/comercio.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';
import { Mapa } from 'src/app/generarMapa';
import { Router } from '@angular/router';
import { MatRadioChange, MatRadioGroup } from '@angular/material/radio';
import { MatSelectChange } from '@angular/material/select';
import { Usuario } from 'src/app/entidades/usuario';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-listado-comercios',
  templateUrl: './listado-comercios.component.html',
  styleUrls: ['./listado-comercios.component.scss'],
})
export class ListadoComerciosComponent implements OnInit {

  mapa: Mapa;

  @Input() usuario: Usuario;

  listado: Comercio[] = [];
  selected: string;
  opciones: string[] = ['streets-v11', 'satellite-v9', 'light-v10', 'dark-v10', 'outdoors-v11'];
  categorias: string[];
  nameCat: string = '';
  nameCom: string = '';
  selectedC: string = '';

  constructor(private service: ComercioService, private _bottomSheet: MatBottomSheet, private authService: AuthService) {
    this.selected = 'streets-v11';
  }

  ngOnInit(): void {
    this.mapa = new Mapa();
    this.usuario = this.authService.getUsuario();
    this.obtenerComercios();
    this.categorias = ['Todos', ...this.service.getCategorias()];
    this.selectedC = this.categorias[0];
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
      this.nameCom = (event.target as HTMLInputElement).value
      this.service.getComercioNombre(this.nameCom, this.nameCat).then((data) => {
        this.listado = data;
      });
    }
  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetComponent);
  }
  eliminar(id: string) {
    if (confirm("estas seguro de eliminar este comercio?")) {
      this.service.deleteComercio(id).then(() => {
        this.obtenerComercios();
      })
    }
  }
  navigate(path: string, id?: string) {
    window.location.href = `/comercio/${path}${id ? '/' + id : ''}`
  }
  onRadioChange(event: MatRadioChange): void {
    this.mapa.changeTema(event.value)
  }
  onSelectChange(event: MatSelectChange): void {
    this.nameCat = event.value;
    this.service.getComercioNombre(this.nameCom, this.nameCat).then((data) => {
      this.listado = data;
    });
  }
}
