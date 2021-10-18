import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComerciosComponent } from './comercios/listado-comercios/listado-comercios.component';
import { AuthGuard } from './guards/auth.guard';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { MenuComponent } from './menu/menu/menu.component';
import { UsuariosComponent } from './usuario/listado-usuarios/usuarios.component';


const routes: Routes = [
  { path: 'login', component: SignInComponent },
  {
    path: 'home', component: MenuComponent, canActivate: [AuthGuard], children: [
      { path: 'comercio', component: ListadoComerciosComponent },
      { path: 'usuario', component: UsuariosComponent },
      { path: "", redirectTo: "/home/comercio", pathMatch: "full" },
      { path: '**', redirectTo: "/home/comercio" },
    ]
  },
  { path: '**', redirectTo: "/home/comercio" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
