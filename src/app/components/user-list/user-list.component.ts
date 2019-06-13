import { Component, OnInit } from '@angular/core';
import {User} from './../../model/user'
import { ChatService } from 'src/app/service/chat.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent{
users:User;
userList:Observable<any>;
  constructor(chat:ChatService) { 
   this.userList=chat.getUsers().valueChanges();
   this.userList.subscribe(user=>{
     this.users=user;
     console.log(this.users)
   })

  }


}
