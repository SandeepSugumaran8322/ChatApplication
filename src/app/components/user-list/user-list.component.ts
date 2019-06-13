import { Component, OnInit } from '@angular/core';
import {User} from './../../model/user'
import { ChatService } from 'src/app/service/chat.service';
import { Observable } from 'rxjs';
import { AngularFireList, AngularFireObject } from 'angularfire2/database';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
users:User[];
users$:AngularFireList<User>
  constructor(private chat:ChatService) {

  }
ngOnInit()
{
  this.users$=this.chat.getUsers()
   this.users$.valueChanges().subscribe(user=>{
     this.users=user;
     console.log('user-list component')
     console.log(this.users)})
}
}



