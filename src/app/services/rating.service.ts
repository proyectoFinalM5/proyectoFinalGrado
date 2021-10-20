import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RatingService {

  constructor(private request: HttpClient) { }

  getComentarios() {
    return this.request.get('https://comentario-random.herokuapp.com/');
  }

}


