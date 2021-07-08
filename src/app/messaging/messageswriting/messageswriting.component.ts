import { Component, OnInit } from '@angular/core';
import { Message } from '../models/message';

@Component({
  selector: 'app-messageswriting',
  templateUrl: './messageswriting.component.html',
  styleUrls: ['./messageswriting.component.css']
})
export class MessageswritingComponent implements OnInit {

  forms: Message={
    id: 8,
    from : "toto@toto.com",
    to: "tata@tata.com",
    subject: "titre message",
    body: "tototatatiti",
    sendDate: new Date('December 17, 1995 03:24:00'),
    receiveDate: new Date('December 17, 1995 03:24:00'),
    read: false

  }

  constructor() { }

  ngOnInit(): void {
  }

  send(){
    console.log(this.forms)
  }

  clear(){
    this.forms = {};
  }

}
