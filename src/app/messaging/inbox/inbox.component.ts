import { Component, OnInit } from '@angular/core';
import { Message } from '../models/message';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  messages!: Message[]

  constructor() { }

  ngOnInit(): void {
    this.messages= [
    {
      id: 1,
      from : "toto@toto.com",
      to: "tata@tata.com",
      subject: "titre message",
      body: "tototatatiti",
      sendDate: new Date('December 17, 1995 03:24:00'),
      receiveDate: new Date('December 17, 1995 03:24:00'),
      read: false
    },
    {
      id: 12,
      from : "toto@toto.com",
      to: "titi@titi.com",
      subject: "titre message",
      body: "tototatatiti",
      sendDate: new Date('December 17, 1995 03:24:00'),
      receiveDate: new Date('December 17, 1995 03:24:00'),
      read: true
    },
    {
      id: 15,
      from : "toto@toto.com",
      to: "tutu@tutu.com",
      subject: "titre message",
      body: "tototatatiti",
      sendDate: new Date('December 17, 1995 03:24:00'),
      receiveDate: new Date('December 17, 1995 03:24:00'),
      read: false
    }
  ]

  }

}
