import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MapaComponent } from './mapa/mapa.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [MapaComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [],
})
export class ComerciosModule {}
