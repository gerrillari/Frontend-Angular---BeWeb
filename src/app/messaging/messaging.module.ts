import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';
import { MessageswritingComponent } from './messageswriting/messageswriting.component';
import { InboxComponent } from './inbox/inbox.component';



@NgModule({
  declarations: [
    NotificationComponent,
    MessageswritingComponent,
    InboxComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MessagingModule { }
