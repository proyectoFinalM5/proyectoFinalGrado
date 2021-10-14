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
  comentarios: [];
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>,
    private service: RatingService
  ) {}

  ngOnInit(): void {
    this.service.getComentarios(this.comercio).then((x) => {
      this.comentarios = this.comentarios;
    });
  }
}
