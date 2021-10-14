import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() { }

  logout(): void {
    localStorage.clear();
  }
  getToken(): String | null {
    return localStorage.getItem('TOKEN_AUTH');
  }
  tokenValido(): boolean {
    const expired =
      parseInt(localStorage.getItem('EXP_IN') || '0') > new Date().getTime();
    return Boolean(localStorage.getItem('TOKEN_AUTH')) && !expired;
  }
}
