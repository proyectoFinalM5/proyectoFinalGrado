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
    // this.comentarios = this.service.getComentarios();
    // this.service.getComentarios().then((x) => {
    //   this.comentarios = this.comentarios;
    // });

      this.mostrar();
  }

  async mostrar() {
    const response = await fetch('https://comentario-random.herokuapp.com');
    const data = await response.json();

    console.log('Obtiene ' + data);
  }
}
