import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapaComponent } from './comercios/mapa/mapa.component';
import { UsuariosComponent } from './usuario/usuarios/usuarios.component';

const routes: Routes = [
  { path: '', redirectTo: '/usuario', pathMatch: 'full' },
  { path: 'mapa', component: MapaComponent },
  { path: 'usuario', component: UsuariosComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
