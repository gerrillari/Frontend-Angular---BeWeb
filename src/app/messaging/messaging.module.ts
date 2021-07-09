import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';
import { MessageswritingComponent } from './messageswriting/messageswriting.component';
import { InboxComponent } from './inbox/inbox.component';
import { FormsModule } from '@angular/forms';
import { NbButtonModule } from '@nebular/theme';
import { NbInputModule } from '@nebular/theme';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    InboxComponent,
    MessageswritingComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    NbButtonModule,
    NbInputModule,
    HttpClientModule
  ],
  exports: [InboxComponent, MessageswritingComponent]
})
export class MessagingModule { }
