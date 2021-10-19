
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';



import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RequestService } from 'src/app/services/request.service';
import { Usuario } from '../entidades/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  constructor(private service: RequestService, private http: HttpClient) { }


  getUsuarios(): Promise<Usuario[]> {
    return this.service.getData<Usuario>('usuario');
  }


  getUsuario(id: string): Promise<Usuario[]> {

    const params = new HttpParams()
    params.set('id', id)
    return this.service.getData<Usuario>('usuario', params);
  }

  deleteUsuario(id: string) {
    return this.service.delete<Usuario>('usuario', id);
  }

  agregarUsuario(usuario: Usuario) {
    return this.service.post('usuario', usuario);
  }

  actualizarUsuario(id: string, usuario: Usuario) {
    return this.service.put('usuario', usuario, id);
  }


  

  ObtenerUsuario(id: string) {
    return this.http.get('https://app-comercios.herokuapp.com/usuario' + id);
  }

}



