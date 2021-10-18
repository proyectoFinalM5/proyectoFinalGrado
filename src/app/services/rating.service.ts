import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comercio } from '../entidades/comercio';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root',
})
export class RatingService extends RequestService {
  getComentarios(comercio: Comercio) {
    const params = new HttpParams();
    const coments = [
      {name: 'Malo'},
      {name: 'Bueno'},
      {name: 'Excelente'},
      {name: 'Malo'},
      {name: 'Bueno'},
      {name: 'Excelente'},
      {name: 'Malo'},
      {name: 'Bueno'},
      {name: 'Excelente'},

    ];
    return coments
    // return this.getData(
    //   '/comentarios',
    //   params,
    //   undefined,
    //   'https://bruno.herokuapp.com'
    // );

export class RatingService {
  constructor(private http: HttpClient) { }
  getComentarios(comercio: Comercio): Promise<any> {
    const params = new HttpParams();
    return this.http.get('https://bruno.herokuapp.com/comentarios', { params }).toPromise();

  }
}
