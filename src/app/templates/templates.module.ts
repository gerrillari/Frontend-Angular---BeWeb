import { MessagingModule } from './../messaging/messaging.module';
import { InboxComponent } from './../messaging/inbox/inbox.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component';
import {SlideMenuModule} from 'primeng/slidemenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ContentComponent,

  ],
  imports: [
    CommonModule,
    SlideMenuModule,
    BrowserAnimationsModule,
    MessagingModule
  ]
})
export class TemplatesModule { }
