import { Navigation } from './models/navigation';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  //items: MenuItem[] = [];
  menus: Navigation[]=[];

  constructor() {

   }

  ngOnInit(): void {
    this.menus=[
      {
        label: "Menu 1"
      },
      {
        label: "Menu 2"
      },
      {
        label: "Menu 3"
      }
    ]
    /*this.items = [
      {
        label:'Messages reçus'
      },
      {
        label:'Messages envoyés'
      },
      {
        label:'Messages supprimés'
      }
    ];*/

  }

}
