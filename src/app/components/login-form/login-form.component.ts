import { Component, OnInit } from '@angular/core';
import {AuthService} from './../../service/auth.service'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
email:string;
password:string;
errorMsg:string
  constructor(private authService:AuthService) { }

  login() {
    this.authService.login(this.email, this.password)
    .catch(err => this.errorMsg = err.message)
  }
  




}
