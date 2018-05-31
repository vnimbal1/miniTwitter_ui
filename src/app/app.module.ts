import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './routes/header/header.component';
import { FollowingComponent } from './routes/following/following.component';
import { FollowersComponent } from './routes/followers/followers.component';
import { AllUsersComponent } from './routes/all-users/all-users.component';
import { MessagesComponent } from './routes/messages/messages.component';
import {AppRoutingModule} from './app-routing.module';
import { AboutComponent } from './routes/about/about.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import {UserService} from './services/user-service/user-service.component';
import {Http, HttpModule} from '@angular/http';
import { UserFollowingCardComponent } from './components/user-following-card/user-following-card.component';
import { MessageCardComponent } from './components/message-card/message-card.component';
import { AllMessageComponent } from './routes/all-message/all-message.component';
import {MessageService} from './services/message-service/message-service.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FollowingComponent,
    FollowersComponent,
    AllUsersComponent,
    MessagesComponent,
    AboutComponent,
    UserCardComponent,
    UserFollowingCardComponent,
    MessageCardComponent,
    AllMessageComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [UserService, MessageService, AllMessageComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
