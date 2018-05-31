import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user-service/user-service.component' ;

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {
  user: Array<any>;
  constructor(private userServiceComponent: UserService) { }

  ngOnInit() {
    this.userServiceComponent.getAllFollowing()
      .subscribe(
        data => this.user = data
      );
  }
}
