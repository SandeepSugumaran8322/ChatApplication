import { Component, OnInit ,Input} from '@angular/core';
import { chatMessage } from 'src/app/model/chatMessage';
import { AuthService } from 'src/app/service/auth.service';

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
isOwnMail:boolean;
ownMail:string;
  constructor(private authSer:AuthService) {
    authSer.authUser().subscribe((auth)=>{
      this.ownMail=auth.email;
    })
    console.log(this.ownMail)
    console.log(this.email)
    console.log(this.isOwnMail=this.ownMail === this.email);
   }

  ngOnInit(chatMsg=this.chatMsg) {
    this.message=chatMsg.message;
    this.username=chatMsg.username;
    this.email=chatMsg.email;
    this.timesent=chatMsg.timesent;
  }

}
