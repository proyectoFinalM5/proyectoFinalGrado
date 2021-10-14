import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComerciosModule } from './comercios/comercios.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { UsuarioModule } from './usuario/usuario.module';

import { HeaderComponent } from './menu/header/header.component';
import { SidenavComponent } from './menu/sidenav/sidenav.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuModule } from './menu/menu.module';
import { RequestService } from './services/request.service';

@NgModule({
  declarations: [AppComponent ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ComerciosModule,
    UsuarioModule,
    MenuModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [RequestService],
  bootstrap: [AppComponent],
})
export class AppModule {}
