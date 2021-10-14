import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComerciosComponent } from '../comercios/listado-comercios/listado-comercios.component';
import { MenuComponent } from '../menu/menu/menu.component';

const routes: Routes = [
  // { path: '', redirectTo: '/menu', pathMatch: 'full' },
  {
    path: 'menu',
    component: MenuComponent,
    children: [
        {
            path: 'mapa',
            outlet: 'mapa',
            component: ListadoComerciosComponent
        },
        // {
        //     path: '',
        //     outlet: 'sidemenu',
        //     component: SideMenuComponent
        // }
    ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
