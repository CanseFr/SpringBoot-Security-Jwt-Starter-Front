import { Component } from '@angular/core';
import {AuthService} from "../../service/controller/auth.service";
import {Router} from "@angular/router";
import {AuthenticationRequest} from "../../service/models/AuthenticationRequest";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  authRequest: AuthenticationRequest={};
  constructor(private router:Router, private authService: AuthService) {}

  login(){
    this.authService.authenticate(this.authRequest)
  }
}
