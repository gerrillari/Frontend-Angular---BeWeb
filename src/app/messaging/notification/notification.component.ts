import { MessagesService } from './../services/messages.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  //déclarer variable notif de type number
  notif!: Number;

  constructor(
    private messageService: MessagesService,) {

  }

  ngOnInit(): void {
    this.messageService
    .getAll()
    .then(messages=>{
      messages = messages.filter(msg=>msg.read == false)
      this.notif = messages.length
    })
    //créer fonction qui crée un nouveau tableau (.filter) par rapport aux messages où son READ est false
    //et faire un length
    //dans le html appeler la variable créée
  }

}
