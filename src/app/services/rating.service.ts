import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comercio } from '../entidades/comercio';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root',
})
export class RatingService extends RequestService {



  getComentarios() {
    const params = new HttpParams();
    // const coments = [
    //   {name: 'Malo'},
    //   {name: 'Bueno'},
    //   {name: 'Excelente'},

    // ];
    // return coments
    // return this.getData(
    //   '/comentario',
    //   params,
    //   undefined,
    //   'https://comentario-random.herokuapp.com/', params
    // );
  }

}


