import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { DialogErrorService } from '../services/dialog-error.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router, private authService: AuthService, private snackBar: DialogErrorService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clonedReq = req.clone({
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.authService.getToken()}`,
      }),
    });

    return next.handle(clonedReq).pipe(map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse && event.status == 200) {
        if (req.method == "POST" || req.method == "PUT") {
          const path = req.url.split('/')[3];
          this.snackBar.openSnackBarSuccess(path === "login" ? "Bienvenido a YouMap" : "Guardado correctamente");
        }
        const { body } = event;
        if ("comercio" in body && body.comercio instanceof Array && body.comercio.length <= 1) {
          event = event.clone({ body: body.comercio[0] });
        }
      }
      return event;
    }),
      catchError((error: HttpErrorResponse) => {
        if (error.status == 401 && error.error.expired) {
          this.authService.logout();
          this.router.navigate(['/login']);
        }
        this.snackBar.openSnackBarError(error.error.message || error.message);
        return throwError(error);
      }));
  }
}
