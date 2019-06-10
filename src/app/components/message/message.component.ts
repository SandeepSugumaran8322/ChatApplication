import { Component, OnInit ,Input} from '@angular/core';
import { chatMessage } from 'src/app/model/chatMessage';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
@Input() chatMsg:chatMessage
email:string;
username:string;
message:string;
timesent:string;
  constructor() { }

  ngOnInit(chatMsg=this.chatMsg) {
    this.message=chatMsg.message;
    this.username=chatMsg.username;
    this.email=chatMsg.email;
    this.timesent=chatMsg.timesent;
  }

}
