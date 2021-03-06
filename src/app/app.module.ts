import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComerciosModule } from './comercios/comercios.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { UsuarioModule } from './usuario/usuario.module';

import { HttpClientModule } from '@angular/common/http';
import { MenuModule } from './menu/menu.module';
import { RequestService } from './services/request.service';

import { LoginModule } from './login/login.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptores/auth.interceptor';
import { AuthService } from './services/auth.service';
import { ComercioService } from './services/comercio.service';
import { UsuarioService } from './services/usuario.service';

import { DialogErrorService } from './services/dialog-error.service';
import { AutenticationService } from './services/autentication.service';
import { environment } from '../environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { MapResponseInterceptor } from './interceptores/map-response.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ComerciosModule,
    UsuarioModule,
    MenuModule,
    BrowserAnimationsModule,
    MaterialModule,
    LoginModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
  ],
  providers: [
    AuthService,
    RequestService,
    ComercioService,
    UsuarioService,
    DialogErrorService,
    AutenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MapResponseInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
