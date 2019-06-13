import { Component, OnInit } from '@angular/core';
import {AuthService} from './../../service/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-sigin-form',
  templateUrl: './sigin-form.component.html',
  styleUrls: ['./sigin-form.component.css']
})
export class SiginFormComponent {
username:string
email:string
password:string
errorMsg:string;
  constructor(private afAuth:AuthService,private router:Router ) {
   }


 signin()
 {
        const email=this.email;
        console.log(email)
        const password=this.password;
        const username=this.username;
        this.afAuth.signin(username,email,password)
        .then(resolve=>this.router.navigate(['login']))
        .catch(error=>{this.errorMsg=error.message;
          console.log(error)}
          );
 }



}
