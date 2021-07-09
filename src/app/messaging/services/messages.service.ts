import { Message } from './../models/message';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) { }

  getAll(): Promise<Message[]>{
    //retourne liste de messages
    return this.http.get<Message[]>("http://localhost:4200/assets/datas.json").toPromise();//comm en bas
  }

  /**
   * getAll(): Observable<Message[]>{
    //retourne liste de messages
    //return this.messages;
    //récupérer les messages lorsqu'il y en a, et le service il va notifier le component (inbox)
    //le service permets au component d'observer la liste de messages
    return this.http
    .get<Message[]>("http://localhost/backend")
    //get = on emet la requête get, récupérer
    //<Message[]> = type d'objet à observer : une liste de messages sous JSON
    //.toPromise()
    //toPromise, message à afficher quand ça s'est bien passé et quand ça s'est mal passé
    //.then((ms)=>{
      //ça va appeler la fonction ci-dessous en passant les messages (ms)
      //this.messages = ms
    //});
    /*.subscribe((ms) => {
      this.messages = ms
    });*/
      //get = on emet la requête get, récupérer
      //lorsqu'il va peupler l'observable (on reçoit des messages) il va déclencher la méthode,
      //subscribe = le subscribe il s'abone à la liste des messages pour recevoir une notification lorsqu'elle sera peuplée par les messages
  //}

  getById(id: number): Message | undefined {
    //retourne un message par son id (array find)
    return this.messages.find(m=> m.id = id);

  }

  create(message: Message): void{
    //ça rajoute le message créé dans la liste de messages
    this.messages.push(message);

  }
}


