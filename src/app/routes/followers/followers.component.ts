import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user-service/user-service.component';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  user: Array<any>;
  constructor(private userServiceComponent: UserService ) { }

  ngOnInit() {
    this.userServiceComponent.getAllFollowers()
      .subscribe(
        data => this.user = data
      );
  }

}
