import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { MessageswritingComponent } from './messaging/messageswriting/messageswriting.component';
import { InboxComponent } from './messaging/inbox/inbox.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes = [
  {
    path:"", component: DashboardComponent,
  },
  {
    path: "messages", component: InboxComponent,
  },
  {
    path: "create-message", component: MessageswritingComponent,
  }
] as Routes

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
