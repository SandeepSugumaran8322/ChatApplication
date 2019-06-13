import { Component, OnInit ,Input} from '@angular/core';
import {User} from './../../model/user'

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() user: User;
  username:string;
  status:string;
  constructor() { }

  ngOnInit(uzer=this.user) {
    console.log(uzer.username)
    this.username=uzer.username;
    this.status=uzer.status;
  }

}