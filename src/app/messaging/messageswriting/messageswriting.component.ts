import { MessagesService } from './../services/messages.service';
import { Component, OnInit } from '@angular/core';
import { Message } from '../models/message';

@Component({
  selector: 'app-messageswriting',
  templateUrl: './messageswriting.component.html',
  styleUrls: ['./messageswriting.component.css']
})
export class MessageswritingComponent implements OnInit {

  message: Message={}

  constructor(private service : MessagesService) { }

  ngOnInit(): void {
  }

  send(){
    this.service.create(this.message);
  }

  clear(){
    this.message = {};
  }

}
