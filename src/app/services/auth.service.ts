import { Injectable } from '@angular/core';
import { LoginResponse } from './autentication.service';
import { DialogErrorService } from './dialog-error.service';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  constructor(private service: DialogErrorService) { }

  logout(): void {
    localStorage.clear();
  }
  getToken(): String | null {
    return localStorage.getItem('AUTH_TOKEN');
  }
  getUsuario() {
    return JSON.parse(localStorage.getItem("usuario") || "{}");
  }
  setToken(token: LoginResponse): void {
    const { user, token: { token: authToken, expIn } } = token;
    localStorage.setItem("AUTH_TOKEN", authToken);
    localStorage.setItem("EXP_IN", expIn.toString());
    localStorage.setItem("usuario", JSON.stringify(user));
  }
  tokenValido(): boolean {
    const expIn = parseInt(localStorage.getItem("EXP_IN") || "0") * 1000;
    const expired = expIn < new Date().getTime()
    if (expired) {
      this.service.openSnackBarError("Su token ha vencido")
    }
    return Boolean(this.getToken()) && !expired;
  }
}
