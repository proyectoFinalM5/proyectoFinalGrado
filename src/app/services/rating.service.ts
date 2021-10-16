import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comercio } from '../entidades/comercio';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root',
})
export class RatingService {
  constructor(private http: HttpClient) { }
  getComentarios(comercio: Comercio): Promise<any> {
    const params = new HttpParams();
    return this.http.get('https://bruno.herokuapp.com/comentarios', { params }).toPromise();
  }
}
