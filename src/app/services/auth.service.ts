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
    return localStorage.getItem('AUTH_TOKEN');
  }
  tokenValido(): boolean {
    const expIn = localStorage.getItem("EXP_IN");
    const expired = expIn || parseInt(expIn || '0') > new Date().getTime()
    console.log(this.getToken())
    return Boolean(this.getToken());
  }
}
