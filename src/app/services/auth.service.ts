import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TokenResponse } from '../entidades/token';
import { LoginResponse } from './autentication.service';
import { DialogErrorService } from './dialog-error.service';

@Injectable({
  providedIn: 'root',
})

export class AuthService {

  constructor(private service: DialogErrorService) { }

  logout(): void {
    // localStorage.clear();
    localStorage.removeItem('AUTH_TOKEN');
    this.router.navigate(['login'])
  }


  verifyLogged(): boolean {
    const token = localStorage.getItem('AUTH_TOKEN');
    // return token ? true : false;
    return !!token;
  }



  getUsuario() {
    return JSON.parse(localStorage.getItem("usuario") || "{}");
  }


  getToken(tag: string = "AUTH_"): String | null {
    return localStorage.getItem(tag + 'TOKEN');

  }
  getUsuario() {
    return JSON.parse(localStorage.getItem("usuario") || "{}");
  }
  setToken(token: LoginResponse): void {
    const { user, token: { token: authToken, expIn } } = token;
    localStorage.setItem("AUTH_TOKEN", authToken);
    localStorage.setItem("AUTH_EXP_IN", expIn.toString());
    localStorage.setItem("usuario", JSON.stringify(user));
  }
  tokenValido(auth: boolean = true): boolean {
    const tag = auth ? "AUTH_" : "REFRESH_";
    const expIn = parseInt(localStorage.getItem(tag + "EXP_IN") || "0") * 1000;
    const expired = expIn < new Date().getTime()
    if (expired) {
      this.service.openSnackBarError("Su token ha vencido")
    }
    return Boolean(this.getToken()) && !expired;
  }
}
