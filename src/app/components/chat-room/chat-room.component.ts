import { Component, OnInit,ViewChild,ElementRef,AfterViewChecked} from '@angular/core';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit,AfterViewChecked {
  // @ViewChild('scroller',{read:true,static:false}) private chatFeed:ElementRef
   
  constructor() { }

  // ScrollDown():void{
  //   this.chatFeed.nativeElement.scrollTop=this.chatFeed.nativeElement.scrollHeight;
  // }

  ngOnInit() {
    
  }
  ngAfterViewChecked()
  {
    // this.ScrollDown();
  }


}
