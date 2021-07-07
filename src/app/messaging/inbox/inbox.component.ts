import { splitClasses } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../models/message';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  @Input() messages!: Message[]

  @Input() count: number = 0 //propriété qui va dire le nb de messages à afficher

  constructor() { }

  ngOnInit(): void {
    //gestion du nb de messages
    this.messages = this.messages.splice(0,this.count);
  //   this.messages= [
  //   {
  //     id: 1,
  //     from : "toto@toto.com",
  //     to: "tata@tata.com",
  //     subject: "titre message",
  //     body: "tototatatiti",
  //     sendDate: new Date('December 17, 1995 03:24:00'),
  //     receiveDate: new Date('December 17, 1995 03:24:00'),
  //     read: false
  //   },
  //   {
  //     id: 12,
  //     from : "toto@toto.com",
  //     to: "titi@titi.com",
  //     subject: "titre message",
  //     body: "tototatatiti",
  //     sendDate: new Date('December 17, 1995 03:24:00'),
  //     receiveDate: new Date('December 17, 1995 03:24:00'),
  //     read: true
  //   },
  //   {
  //     id: 15,
  //     from : "toto@toto.com",
  //     to: "tutu@tutu.com",
  //     subject: "titre message",
  //     body: "tototatatiti",
  //     sendDate: new Date('December 17, 1995 03:24:00'),
  //     receiveDate: new Date('December 17, 1995 03:24:00'),
  //     read: false
  //   }
  // ]

  }

  filter(event: Event){
    //caste de l'élément afin de pouvoir le manipuler
    let input = event.target as HTMLInputElement;//transformer en html au lieu d'event target - tipage
    //renvoie nouvelle liste des messages si la condition est vérifié (dans ce cas s'il a été lu)
    this.messages = this.messages.filter(message=>message.read === input.checked)
    console.log(event)
  }

}
