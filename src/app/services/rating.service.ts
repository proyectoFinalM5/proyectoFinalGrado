import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comercio } from '../entidades/comercio';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root',
})
export class RatingService extends RequestService {
  getComentarios(comercio: Comercio): Promise<any> {
    const params = new HttpParams();
    return this.getData(
      '/comentarios',
      params,
      undefined,
      'https://bruno.herokuapp.com'
    );
  }
}
