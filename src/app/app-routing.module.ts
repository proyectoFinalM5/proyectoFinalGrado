import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapaComponent } from './comercios/mapa/mapa.component';

const routes: Routes = [
  { path: '', redirectTo: '/mapa', pathMatch: 'full' },
  { path: 'mapa', component: MapaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
