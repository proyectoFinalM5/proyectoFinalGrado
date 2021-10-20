import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class RequestService {
  private url = 'http://app-comercios.herokuapp.com';

  constructor(private http: HttpClient) { }

  getData<T>(path: string, params?: HttpParams): Promise<T[]> {
    return this.http.get<T[]>(`${this.url}/${path}`, { params: params }).toPromise();
  }
  post<P, A>(path: string, entidad: P): Promise<P | A> {
    return this.http.post<P | A>(`${this.url}/${path}`, entidad).toPromise();
  }
  put<P>(path: string, entidad: P, id: string): Promise<P> {
    return this.http.put<P>(`${this.url}/${path}/${id}`, entidad).toPromise();
  }
  delete<D>(path: string, id: string) {
    return this.http.delete<D>(`${this.url}/${path}/${id}`).toPromise();
  }
}
