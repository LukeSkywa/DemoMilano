import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomInterptorService implements HttpInterceptor {

  

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // qui potrei mettere della logica per alterare o controllare la request
    return next.handle(req).pipe(
      // con il pipe posso stare in ascolto della response
      tap(response=>{
        console.log('success');
      }, error =>{
        console.log('error');
      })
    );
  }
}
