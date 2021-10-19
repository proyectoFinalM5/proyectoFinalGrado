import { RequestService } from 'src/app/services/request.service';
import { Injectable } from '@angular/core';
import { Comercio } from '../entidades/comercio';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComercioService {

  constructor(private service: RequestService, private http: HttpClient) {

  }

  getComercios(): Promise<Comercio[]>  {
    return this.service.getData<Comercio>('/comercio');
  }

  getComercio(id:string): Promise<Comercio[]> {
    const params = new HttpParams()
    params.set('id', id)
    return this.service.getData<Comercio>('/comercio', params);
  }


  deleteComercio(id: string) {
    return this.service.delete<Comercio>('comercio', id);
  }

  agregarComercio(comercio: Comercio) {
    return this.service.post('comercio', comercio);
  }

  actualizarComercio(id: string, comercio: Comercio) {
    return this.service.put('comercio', comercio, id);
  }

  getComercioNombre(nombre:string): Promise<Comercio[]> {
    const params = new HttpParams()
    params.set('nombre', nombre)
    return this.service.getData<Comercio>('/comercio', params);
  }

  NuevoComercio(comercio: Comercio) {
    return this.service.post('comercio', comercio);
  }
  // deleteComercio(id:string) {
  //     return this.service.delete<Comercio>('/comercio',id);
  // }

}
