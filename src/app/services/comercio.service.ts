
import { RequestService } from 'src/app/services/request.service';
import { Injectable } from '@angular/core';
import { Comercio } from '../entidades/comercio';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComercioService {

  constructor(private service: RequestService, private  request: RequestService) {

  }

  getComercios(): Promise<Comercio[]>  {
    return this.service.getData<Comercio>('/comercio');
  }

  getComercio(id:string): Promise<Comercio[]> {
    const params = new HttpParams()
    params.set('id', id)
    return this.service.getData<Comercio>('/comercio', params);
  }

  getComercioNombre(nombre:string): Promise<Comercio[]> {
    const params = new HttpParams()
    params.set('nombre', nombre)
    return this.service.getData<Comercio>('/comercio', params);
  }
  // deleteComercio(id:string) {
  //     return this.service.delete<Comercio>('/comercio',id);
  // }
  deleteComercio(id: string) {
    return this.request.delete<Comercio>('comercio',id);
  }

}
