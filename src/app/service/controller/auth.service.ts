import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router:Router) { }

  user: any;
  authController:string = "http://localhost:8080/auth/";

  authenticate(body:any):any{

    this.http.post<any>( this.authController + 'authenticate',body )

      .subscribe({

        next:async (data:any) => {

          localStorage.setItem('token', data.token as string)
          const helper = new JwtHelperService();

          if (data.token != null) {

            const decodedToken = helper.decodeToken(data.token)

            if (decodedToken.authorities[0].authority == 'ROLE_USER') {

              await this.router.navigate(['home/user'])

            }
            if (decodedToken.authorities[0].authority == 'ROLE_ADMIN') {

              await this.router.navigate(['home/admin'])

            }
          }
        },
        error: (err:any)=> {
          return err;
        }
      })
  }
}
