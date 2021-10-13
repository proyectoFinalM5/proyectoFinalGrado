import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComerciosComponent } from './comercios/listado-comercios/listado-comercios.component';
import { UsuariosComponent } from './usuario/usuarios/usuarios.component';

const routes: Routes = [
  { path: '', redirectTo: '/mapa', pathMatch: 'full' },
  { path: 'mapa', component: ListadoComerciosComponent },
  { path: 'usuario', component: UsuariosComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
