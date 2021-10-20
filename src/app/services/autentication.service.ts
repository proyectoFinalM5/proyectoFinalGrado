import { Injectable } from '@angular/core';
import { Login } from '../entidades/login';
import { TokenResponse } from '../entidades/token';
import { Usuario } from '../entidades/usuario';
import { AuthService } from './auth.service';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticationService {

  constructor(private service: RequestService, private authService: AuthService) { }

  async login(email: string, password: string) {
    const response = await this.service.post<Login, LoginResponse>('login', { email, password });
    if ("token" in response) {
      this.authService.setToken(response);
    }
    return response;
  }
}
export type LoginResponse = {
  user: Usuario,
  token: TokenResponse
}