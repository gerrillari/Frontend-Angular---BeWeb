import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/messaging/models/message';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  discord!: Message[]
  gmail!: Message[]

  constructor() { }

  ngOnInit(): void {
    this.discord= [
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
  this.gmail= [
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
