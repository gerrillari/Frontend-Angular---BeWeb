import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';
import { MessageswritingComponent } from './messageswriting/messageswriting.component';
import { InboxComponent } from './inbox/inbox.component';
import { NbCardModule } from '@nebular/theme';



@NgModule({
  declarations: [
    InboxComponent

  ],
  imports: [
    CommonModule,
    NbCardModule
  ],
  exports: [InboxComponent]
})
export class MessagingModule { }
