import { Routes } from '@angular/router';
import { LoginFormComponent } from './app/components/login-form/login-form.component';
import { SiginFormComponent } from './app/components/sigin-form/sigin-form.component';
import { ChatRoomComponent } from './app/components/chat-room/chat-room.component';

export const routes: Routes = [
    {path:'login',component:LoginFormComponent},
    {path:'sigin', component:SiginFormComponent},
    {path:'chat',component:ChatRoomComponent},
    {path:'',redirectTo:'/login',pathMatch:'full'}
];

export class AppRoutingModule { }
