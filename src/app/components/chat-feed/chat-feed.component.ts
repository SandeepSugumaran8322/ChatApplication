import { Component, OnInit, OnChanges } from '@angular/core';
import {ChatService} from './../../service/chat.service'
import { AngularFireList } from 'angularfire2/database';
import { chatMessage } from 'src/app/model/chatMessage';

@Component({
  selector: 'app-chat-feed',
  templateUrl: './chat-feed.component.html',
  styleUrls: ['./chat-feed.component.css']
})
export class ChatFeedComponent implements OnInit,OnChanges {
  chats:any
  chats$:AngularFireList<chatMessage>

  constructor(private chat:ChatService) { 
  }

  ngOnInit() {
    this.chats$=this.chat.getMessages();
    this.chats$.valueChanges().subscribe(data=>
      {
        this.chats=data;
      },err=>{
        console.log(err);
      })
    //console.log(this.chats);
  }
  ngOnChanges()
  {
    this.chats$=this.chat.getMessages();
    this.chats$.valueChanges().subscribe(data=>
      {
        this.chats=data;
      },err=>{
        console.log(err);
      })
  }

}
