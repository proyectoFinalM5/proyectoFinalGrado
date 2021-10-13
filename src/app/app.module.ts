import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComerciosModule } from './comercios/comercios.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { UsuarioModule } from './usuario/usuario.module';

import { HeaderComponent } from './comercios/header/header.component';
import { SidenavComponent } from './comercios/sidenav/sidenav.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ComerciosModule,
    UsuarioModule,
    BrowserAnimationsModule,
    MaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
