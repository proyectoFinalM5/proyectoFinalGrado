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

import { RegistroComercioComponent } from './registro-comercio/registro-comercio.component';

import { FormsModule } from '@angular/forms';
import { MapaInicioComponent } from './mapa-inicio/mapa-inicio.component';
import { RatingModule } from 'ng-starrating';

NgxPermissionsModule.forRoot()

@NgModule({

  declarations: [ListadoComerciosComponent, BottomSheetComponent, MapaInicioComponent, RegistroComercioComponent],
  imports: [CommonModule, FormsModule ,RouterModule, MaterialModule, RatingModule],

  providers: [RequestService, RatingService, ComercioService],
  exports: [],
})
export class ComerciosModule {}
