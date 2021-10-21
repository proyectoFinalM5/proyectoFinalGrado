import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Comercio } from 'src/app/entidades/comercio';
import { RatingService } from 'src/app/services/rating.service';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss'],
})
export class BottomSheetComponent implements OnInit {
  @Input() comercio: Comercio;
  comentarios: any[];
  showSpinner = false;
  fecha: string;

  constructor(
    private _bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>,
    private service: RatingService
  ) {}
  ngOnInit(): void {
    this.mostrar();
  }

  //para mostrar comentarios
  mostrar() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
      fetch('https://comentario-random.herokuapp.com')
        .then((response) => response.json())

        .then((data) => {
          this.comentarios = data;
          this.comentarios.forEach(x => {
              this.fecha = x.createdAt.substr(0,10);
          });
        });
    }, 2000);
  }
}
