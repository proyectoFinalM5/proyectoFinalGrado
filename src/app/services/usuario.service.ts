import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Usuario } from '../entidades/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private service: RequestService,
    private http: HttpClient) { }

  getUsuarios(): Promise<Usuario[]>  {
    return this.service.getData<Usuario>('/usuario');
  }

  getUsuario(id:string): Promise<Usuario[]> {
    const params = new HttpParams()
    params.set('id', id)
    return this.service.getData<Usuario>('/usuario', params);
  }

  deleteUsuario(id: string) {
    return this.http.delete('http://apicomercios.herokuapp.com/usuario/' + id).toPromise(); 
  }
}
