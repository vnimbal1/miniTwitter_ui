import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FollowingComponent} from './routes/following/following.component';
import {FollowersComponent} from './routes/followers/followers.component';
import {MessagesComponent} from './routes/messages/messages.component';
import {AboutComponent} from './routes/about/about.component';
import {AllUsersComponent} from './routes/all-users/all-users.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/endPoints', pathMatch: 'full'},
  {path: 'endPoints', component: AboutComponent},
  {path: 'following', component: FollowingComponent},
  {path: 'followers', component: FollowersComponent},
  {path: 'messages', component: MessagesComponent},
  {path: 'allUsers', component: AllUsersComponent}



];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
