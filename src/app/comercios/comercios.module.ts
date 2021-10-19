import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material.module';
import { ListadoComerciosComponent } from './listado-comercios/listado-comercios.component';
import { RequestService } from '../services/request.service';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { RatingService } from '../services/rating.service';
import { NgxPermissionsModule } from 'ngx-permissions';
import { ComercioService } from '../services/comercio.service';
import { FormsModule } from '@angular/forms';

NgxPermissionsModule.forRoot()

@NgModule({
  declarations: [ListadoComerciosComponent, BottomSheetComponent],
  imports: [CommonModule, FormsModule ,RouterModule, MaterialModule],
  providers: [RequestService, RatingService, ComercioService],
  exports: [],
})
export class ComerciosModule {}
