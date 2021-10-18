import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Usuario } from '../entidades/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private service: RequestService, private http: HttpClient) { }

  getComercios(): Promise<Usuario[]>  {
    return this.service.getData<Usuario>('/usuario');
  }
  deleteUsuario(id: string) {
    return this.http.delete('https://app-comercios.herokuapp.com/usuario/' + id).toPromise();
  }
}
