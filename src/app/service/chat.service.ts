import { Injectable } from '@angular/core';
import { chatMessage } from './../model/chatMessage'
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from '@firebase/app'

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  user: any
  // userName: Observable<string>
  chatMessages$:AngularFireList<chatMessage>
  constructor(private db: AngularFireDatabase, private auth: AngularFireAuth) {
    // this.auth.authState.subscribe(auth => {
    //   if ((this.auth !== undefined) && (this.auth !== null)) {
    //     this.user = auth;
    //   }
    // })

  }


  public sendMessage(message: string): void {
    //const timeStamp= this.getTimeStamp();
    const timeStamp=this.getTimeStamp();
    const email = "sandeep-testing@chat";
    this.chatMessages$ = this.getMessages();
    this.chatMessages$.push({
      timesent:timeStamp,
      email:email,
      username:'sandeep_admin',
      message:message
    })

  }


  public getTimeStamp() {
    const now = new Date();
     const date = now.getUTCFullYear() + "/" + (now.getUTCMonth() + 1) + "/" + now.getUTCDate();
    const time = now.getHours() + ":" + now.getMinutes() + ":" + now.getMilliseconds();
    //return new Date(now.getUTCFullYear(),(now.getUTCMonth() + 1),now.getUTCDate(),now.getUTCHours(),now.getUTCMinutes(),now.getUTCMilliseconds()).toLocaleString()
    return date+" "+time;
  }

getMessages():AngularFireList<chatMessage> {
  return this.db.list('messages',ref=>ref.limitToLast(25));
  }



}
