import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapaComponent } from './comercios/mapa/mapa.component';

import { UsuariosComponent } from './usuario/ListadoUsuarios/usuarios.component';
import { RegistrarUsuariosComponent } from './usuario/registrar-usuarios/registrar-usuarios.component';

const routes: Routes = [
  { path: '', redirectTo: '/listUsuario', pathMatch: 'full' },
  { path: 'mapa', component: MapaComponent },
  { path: 'listUsuario', component: UsuariosComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
