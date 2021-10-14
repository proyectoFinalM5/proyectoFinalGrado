import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComerciosComponent } from './comercios/listado-comercios/listado-comercios.component';
import { MenuComponent } from './menu/menu/menu.component';
import { UsuariosComponent } from './usuario/usuarios/usuarios.component';

const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  // { path: 'mapa', loadChildren: () => import('./comercios/comercios.module').then(m => m.ComerciosModule) },
  // { path: 'usuario', loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule) },
  // { path: 'menu', loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule) },

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
