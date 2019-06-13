import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app'
import { async } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User>
  authState: any
  userId: string;
setUID:Observable<any>
  constructor(private af: AngularFireAuth, private db: AngularFireDatabase, private router: Router) {
    this.user = af.authState;
  }

  // getUserId = () => {
  //   this.user.subscribe(auth => {
  //     if (auth) {
  //       this.userId = auth.uid
  //       console.log(this.userId)
  //     }
  //   })
  // }

  logout() {
    this.af.auth.signOut();
    this.router.navigate(['login'])
  }

  authUser() {
    return this.user;
  }

  login(email: string, password: string) {
    return this.af.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
        this.setUserStatus('online')
        this.router.navigate(['chat'])
      });
  }

  setUserStatus(status: string) {
    const path = `users/${this.userId}`;
    const data = {
      status: status
    };
    this.db.object(path).update(data).catch(err => console.log(err))
  }


// get currentUserId(): string {
//     this.user.subscribe(auth=>{
//       if(auth){
//         this.userId=auth.uid
//       }
//     })
//     console.log(this.userId)
//     return this.userId;
//   }

  signin(username: string, email: string, password: string) {
    return this.af.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.setUserData(email, username, password)
      })
      .catch(err => {
        console.log(`this is the error`);
        console.log(err)
        console.log(`this is the error`);
      });
  }

 public  async setUserData(email: string, username: string, password: string ) {
    // console.log("Entered auth service .....")
    // console.log(`email id is:${email}`)
        await this.user.subscribe(auth => {
          if (auth) {
            this.userId = auth.uid
          }
        })
    const path = `users/${this.userId}`

    console.log(`this is the path :${path}`)
    const data = {
      email: email,
      username: username,
      status: 'offline'
    }

    this.db.object(path).update(data).catch(err => console.log(err));

  }

}
