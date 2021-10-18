import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TokenResponse } from '../entidades/token';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  constructor(private router: Router) { }

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





  getToken(): String | null {
    return localStorage.getItem('AUTH_TOKEN');
  }
  setToken(token: TokenResponse): void {
    const { auth: { token: authToken, expiredIn } } = token;
    localStorage.setItem("AUTH_tOKEN", authToken.toString());
    localStorage.setItem("EXP_IN", expiredIn.toString());
  }
  tokenValido(): boolean {
    const expIn = localStorage.getItem("EXP_IN");
    const expired = expIn || parseInt(expIn || '0') > new Date().getTime()
    return Boolean(this.getToken());
  }
}
