import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class RequestService {

  private url = 'http://app-comercios.herokuapp.com';

  constructor(private http: HttpClient) { }
  private _ruta = (path: string) => this.url.concat(path);

  getData<T>(path: string, params?: HttpParams ): Promise<T[]> {
    return this.http.get<T[]>(`${this.url}/${path}`, { params }).toPromise();
  }
  post<P, A>(path: string, entidad: P): Promise<P | A> {
    return this.http.post<P | A>(`${this.url}/${path}`, entidad).toPromise();
  }
  put<P>(path: string, entidad: P, id: string): Promise<P> {
    const params = new HttpParams().set("id", id);
    return this.http.put<P>(`${this.url}/${path}/${id}`, entidad ).toPromise();
  }
  delete<D>(path: string, id: string) {
    const params = new HttpParams().set("id", id);
    return this.http.delete<D>(`${this.url}/${path}/${id}`).toPromise();
  }
}
