import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material.module';
import { ListadoComerciosComponent } from './listado-comercios/listado-comercios.component';


@NgModule({
  declarations: [
    ListadoComerciosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [

  ],
})
export class ComerciosModule { }
