import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UsuariosComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [],
})
export class UsuarioModule {}
