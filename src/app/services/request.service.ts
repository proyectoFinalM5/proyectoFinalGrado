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

  private url = 'http://app-comercios.herokuapp.com';

  constructor(private http: HttpClient) { }
  private _ruta = (path: string) => this.url.concat(path);

  getData<T>(path: string, params?: HttpParams, headers?: HttpHeaders): Promise<T[]> {
    return this.http.get<T[]>(this._ruta(path), { params, headers, }).toPromise();
  }
  post<P, A>(path: string, entidad: P): Promise<P | A> {
    return this.http.post<P | A>(this._ruta(path), entidad).toPromise();
  }
  put<P>(path: string, entidad: P, id: string): Promise<P> {
    const params = new HttpParams().set("id", id);
    return this.http.put<P>(this._ruta(path), entidad, { params }).toPromise();
  }
  delete<D>(path: string, id: string) {
    const params = new HttpParams().set("id", id);
    return this.http.delete<D>(this._ruta(path), { params: params }).toPromise();

  }
}
