import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comercio } from '../entidades/comercio';

@Injectable({
  providedIn: 'root',
})
export class ComercioService {
   //url = 'https://apicomercios.herokuapp.com';
    url = 'http://localhost:3000';

  constructor(private http: HttpClient) { console.log('Entrooooo'); }

  // getComercios() {
  //   let header = new HttpHeaders()
  //   .set('Type-content', 'aplication/json')

  //   return this.http.get('/comercio', {
  //     headers: header
  //   });
  // }

  getComercios(): Observable<Comercio[]> {
    const header = new HttpHeaders().set(
      'Authorization',
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYXV0aCIsImVtYWlsIjoibWVsdmluQGdtYWlsLmNvbSIsImlhdCI6MTYzNDE1NDU5NiwiZXhwIjoxNjM0MTk3Nzk2fQ.tUoHSsIIaOQx1SjP9fbExj56QNgP33goCPn89hMh7oQ'
    );

    return this.http.get<Comercio[]>(this.url + '/comercio', {
      headers: header,
    });

  }
}
