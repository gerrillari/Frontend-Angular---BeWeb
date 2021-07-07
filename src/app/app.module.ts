import { InboxComponent } from './messaging/inbox/inbox.component';
import { NavComponent } from './templates/nav/nav.component';
import { FooterComponent } from './templates/footer/footer.component';
import { HeaderComponent } from './templates/header/header.component';
import { MessagingModule } from './messaging/messaging.module';
import { ContentComponent } from './templates/content/content.component';
import { PagesModule } from './pages/pages.module';
import { TemplatesModule } from './templates/templates.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplatesModule,
    PagesModule,
    MessagingModule
  ],
  providers: [],
  bootstrap: [ContentComponent, HeaderComponent,FooterComponent,NavComponent]
})
export class AppModule { }
