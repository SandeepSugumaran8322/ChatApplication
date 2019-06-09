import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms'

import { routes } from './../routes';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SiginFormComponent } from './components/sigin-form/sigin-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ChatFormComponent } from './components/chat-form/chat-form.component';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';
import { ChatFeedComponent } from './components/chat-feed/chat-feed.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { MessageComponent } from './components/message/message.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import {AuthService} from './service/auth.service'
import {ChatService} from './service/chat.service'
import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database'
import {AngularFireAuthModule} from 'angularfire2/auth'
import { environment } from 'src/environments/environment.prod';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SiginFormComponent,
    NavbarComponent,
    ChatFormComponent,
    ChatRoomComponent,
    ChatFeedComponent,
    UserListComponent,
    MessageComponent,
    UserItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase)

  ],
  providers: [ChatService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
