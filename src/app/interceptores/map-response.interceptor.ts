import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class MapResponseInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse && event.status == 200) {
        const { body } = event;
        if ("comercio" in body && body.comercio instanceof Array && body.comercio.length <= 1) {
          event = event.clone({ body: body.comercio[0] });
        }
        if (body instanceof Array && body.length > 1) {
          const prop = "categoria" in body[0] ? "categoria" : 'rol'
          const list = body.sort((x, y) => {
            if (x[prop] < y[prop]) { return -1; }
            if (x[prop] > y[prop]) { return 1; }
            return 0;
          });
          event = event.clone({ body: list })
        }
      }
      return event;
    }));
  }
}