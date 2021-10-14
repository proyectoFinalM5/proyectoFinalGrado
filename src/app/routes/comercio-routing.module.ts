import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComerciosComponent } from '../comercios/listado-comercios/listado-comercios.component';

const routes: Routes = [
  // { path: '', redirectTo: '/mapa', pathMatch: 'full' },
  // { path: 'mapa', loadChildren: () => import('../comercios/comercios.module').then(m => m.ComerciosModule) },
  // { path: 'mapa', component: ListadoComerciosComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComercioRoutingModule { }
