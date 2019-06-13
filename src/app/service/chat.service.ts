import { Injectable } from '@angular/core';
import { chatMessage } from './../model/chatMessage'
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  user:any
  item:Observable<any>
  userName: string;
  chatMessages$:AngularFireList<chatMessage>

  constructor(private db: AngularFireDatabase, private auth: AngularFireAuth) {
    this.auth.authState.subscribe(auth => {
      if ((this.auth !== undefined) && (this.auth !== null)) {
        this.user = auth
      }
      this.item=this.getUser().valueChanges()
      this.item.subscribe(a=>{
        this.userName=a.username});
    })

  }
  getUser()
  {
    const userId=this.user.uid;
    const path=`users/${userId}`;
    return this.db.object(path)
  }
  getUsers()
  {
    const path='/users';
    return this.db.object(path);
  }


  public sendMessage(message: string): void {
    //const timeStamp= this.getTimeStamp();
    const timeStamp=this.getTimeStamp();
    const email = this.user.email;
    this.chatMessages$ = this.getMessages();
    this.chatMessages$.push({
      timesent:timeStamp,
      email:email,
      username:this.userName,
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
