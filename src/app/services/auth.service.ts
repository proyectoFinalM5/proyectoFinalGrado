import { Injectable } from '@angular/core';
import { TokenResponse } from '../entidades/token';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  constructor() { }

  logout(): void {
    localStorage.clear();
  }
  getToken(tag: string = "AUTH_"): String | null {
    return localStorage.getItem(tag + 'TOKEN');
  }
  setToken(token: TokenResponse): void {
    const { auth: { token: authToken, expIn }, refresh: { token: refreshToken, expIn: expiredInR } } = token;
    localStorage.setItem("AUTH_TOKEN", authToken);
    localStorage.setItem("AUTH_EXP_IN", expIn.toString());
    localStorage.setItem("REFRESH_TOKEN", refreshToken);
    localStorage.setItem("REFRESH_EXP_IN", expiredInR.toString());
  }
  tokenValido(auth: boolean = true): boolean {
    const tag = auth ? "AUTH_" : "REFRESH_";
    const expIn = localStorage.getItem(tag + "EXP_IN");
    const expired = expIn || parseInt(expIn || '0') > new Date().getTime()
    return Boolean(this.getToken());
  }
}
