import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComerciosComponent } from './comercios/listado-comercios/listado-comercios.component';
import { MenuComponent } from './menu/menu/menu.component';
import { UsuariosComponent } from './usuario/usuarios/usuarios.component';

const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  // { path: 'menu', loadChildren: () => import('./routes/menu-routing.module').then(m => m.MenuRoutingModule) },

  { path: 'menu',component: MenuComponent, children: [
    {
      path: 'mapa', component: ListadoComerciosComponent, outlet: 'menu'
    }
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
