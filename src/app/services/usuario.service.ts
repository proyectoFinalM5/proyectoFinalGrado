import { Injectable } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Usuario } from '../entidades/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private service: RequestService) { }

  getComercios(): Promise<Usuario[]>  {
    return this.service.getData<Usuario>('/usuario');
  }
}
