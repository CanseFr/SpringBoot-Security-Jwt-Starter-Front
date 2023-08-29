import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorServiceService implements HttpInterceptor{

  constructor() { }

  // @ts-ignore
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if(!req.url.includes('/authenticate')){
      const token = localStorage.getItem('token');

      if(token){
        const authRequest = req.clone({
          headers : new HttpHeaders({
            Authorization: 'Bearer ' + token
          })
        });
        return next.handle(authRequest);
      }
      return next.handle(req);
    }
  }
}
