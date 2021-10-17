import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  url = 'https://app-comercios.herokuapp.com';
  // url = 'http://localhost:3000'
  constructor(private http: HttpClient) {}
  getData<T>(
    path: string,
    params?: HttpParams,
    headers?: HttpHeaders,
    url?: string
  ): Promise<T[]> {
    return this.http
      .get<T[]>((url || this.url).concat(path), {
        params,
        headers,
      })
      .toPromise();
  }
}
