import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './ListadoUsuarios/usuarios.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { RegistrarUsuariosComponent } from './registrar-usuarios/registrar-usuarios.component';
import { AlertasComponent } from './alertas/alertas.component';
import { ServiciosComponent } from './servicios/servicios.component';



@NgModule({
  declarations: [
    UsuariosComponent,
    RegistrarUsuariosComponent,
    AlertasComponent,
    ServiciosComponent,
    
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
