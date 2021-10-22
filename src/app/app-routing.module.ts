import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComerciosComponent } from './comercios/listado-comercios/listado-comercios.component';
import { MapaInicioComponent } from './comercios/mapa-inicio/mapa-inicio.component';
import { AuthGuard } from './guards/auth.guard';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { MenuComponent } from './menu/menu/menu.component';
import { RegistroComercioComponent } from './comercios/registro-comercio/registro-comercio.component';
import { UsuariosComponent } from './usuario/listado-usuarios/usuarios.component';

const routes: Routes = [
  { path: 'login', component: SignInComponent },
  {
    path: '', component: MenuComponent, canActivate: [AuthGuard], children: [
      { path: 'inicio', component: MapaInicioComponent },
      { path: 'comercio', component: ListadoComerciosComponent },
      { path: 'usuario', component: UsuariosComponent },
      { path: 'comercio/registro', component: RegistroComercioComponent },
      { path: 'comercio/editar/:id', component: RegistroComercioComponent },
      { path: '**', redirectTo: "/inicio" },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
