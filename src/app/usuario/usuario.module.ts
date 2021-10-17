import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';

import { NgxPermissionsModule } from 'ngx-permissions';
import { UsuariosComponent } from './listado-usuarios/usuarios.component';
import { RegistroUsuariosComponent } from './registro-usuarios/registro-usuarios.component';

NgxPermissionsModule.forRoot()

@NgModule({
  declarations: [
    UsuariosComponent,
    RegistroUsuariosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [

  ]
})
export class UsuarioModule { }
