import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from '../usuario/usuarios/usuarios.component';

const routes: Routes = [
  { path: '', redirectTo: '/usuario', pathMatch: 'full' },
  { path: 'usuario', loadChildren: () => import('../usuario/usuario.module').then(m => m.UsuarioModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
