import { Message } from './../models/message';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { Injectable } from '@angular/core';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {

  private messages: Message[] = [
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

  constructor() { }

  getAll(): Message[]{
    //retourne liste de messages
    return this.messages;
  }

  getById(id: number): Message | undefined {
    //retourne un message par son id (array find)
    return this.messages.find(m=> m.id = id);

  }

  create(message: Message): void{
    //ça rajoute le message créé dans la liste de messages
    this.messages.push(message);

  }
}


