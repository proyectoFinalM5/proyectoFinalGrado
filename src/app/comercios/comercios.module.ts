import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material.module';
import { ListadoComerciosComponent } from './listado-comercios/listado-comercios.component';
import { RequestService } from '../services/request.service';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { RatingService } from '../services/rating.service';

@NgModule({
  declarations: [ListadoComerciosComponent, BottomSheetComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  providers: [RequestService, RatingService],
  exports: [],
})
export class ComerciosModule {}
