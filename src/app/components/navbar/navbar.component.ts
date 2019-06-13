import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
user:Observable<any>;
userEmail:string;

  constructor(private authSer:AuthService) { }

  ngOnInit() {
    this.user=this.authSer.authUser();
    this.user.subscribe(auth=>{
      this.userEmail=auth.email
      console.log(this.userEmail)
    })
  }

 async logout() {
    await this.authSer.setUserStatus('offline')
    this.authSer.logout();
  }
}
