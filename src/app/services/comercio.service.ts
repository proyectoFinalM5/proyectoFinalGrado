
import { RequestService } from 'src/app/services/request.service';
import { Injectable } from '@angular/core';
import { Comercio } from '../entidades/comercio';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComercioService {

  constructor(private service: RequestService) { }

  getComercios(): Promise<Comercio[]> {
    return this.service.getData<Comercio>('comercio');
  }

  getComercioNombre(nombre: string): Promise<Comercio[]> {
    const params = new HttpParams().set('nombre', nombre);
    return this.service.getData<Comercio>('comercio/search', params);
  }

  getComercio(id: string): Promise<Comercio[]> {
    return this.service.getData<Comercio>(`comercio/${id}`);
  }

  agregarComercio(comercio: Comercio) {
    return this.service.post('comercio', comercio);
  }

  actualizarComercio(id: string, comercio: Comercio) {
    return this.service.put('comercio', comercio, id);
  }

  deleteComercio(id: string) {
    return this.service.delete<Comercio>('comercio', id);
  }
  getCategorias(): string[] {
    return ['Comedor/Restaurante', 'Banco', 'Ropa', 'Zapatería', 'Juguetería', 'Panadería', 'Bazar', 'Ferretería', 'Farmacia', 'Electrónica', 'Comercial', 'Otro']
  }
}
