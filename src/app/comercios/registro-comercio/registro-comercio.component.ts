import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-comercio',
  templateUrl: './registro-comercio.component.html',
  styleUrls: ['./registro-comercio.component.scss']
})
export class RegistroComercioComponent implements OnInit {

  title = 'NUEVO COMERCIO';
  hide = true;

  constructor() { }

  ngOnInit(): void {
  }

}
