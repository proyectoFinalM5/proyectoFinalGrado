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

  constructor(
    private _bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>,
    private service: RatingService
  ) {}
  ngOnInit(): void  {
      this.mostrar();
  }

  //para mostrar comentarios
  mostrar() {
    fetch('https://comentario-random.herokuapp.com')
    .then(response => response.json())

    .then(data => {
      this.comentarios = data;
      console.log(this.comentarios);
    });
  }

  estrellas(score: number): number {
    return Math.round(score / 20);
  }
}
