import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  opts = {
    speed: 400
  };

  messages = [
    {
      user: 'simon',
      createdAt: 1554090856000,
      msg: 'Hey whats up mate?'
    },

    {
      user: 'max',
      createdAt: 1554090956000,
      msg: 'Working on my ionic project, you?'
    },

    {
      user: 'simon',
      createdAt: 1554091056000,
      msg: 'Just watching some tutorials.'
    }
  ];

  currentUser = 'simon';
  newMsg = '';
  //@ViewChild(IonContent) content: IonContent

  constructor() { }

  sendMessage(){
    this.messages.push({
      user: 'simon',
      createdAt: new Date().getTime(),
      msg: this.newMsg
    });

    this.newMsg = '';

    //setTimeout(() => {
      //this.content.scrollToBottom(200);

    //});

    
    

  }

  ngOnInit() {
  }

  

}
