import {Component, Injectable, OnInit} from '@angular/core';
import {UserService} from '../../services/user-service/user-service.component';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})

export class AllUsersComponent implements OnInit {
  user: Array<any>;
  userNotFollowing: Array<any>;
  userFollowing: Array<any>;

  constructor(private userServiceComponent: UserService) {
  }

  ngOnInit() {
    /*  this.userServiceComponent.getAllPerson()
     .subscribe(
     data => this.user = data
     );*/
    this.userServiceComponent.getAllNotFollowing()
      .subscribe(
        data => this.userNotFollowing = data
      );
    this.userServiceComponent.getAllFollowing()
      .subscribe(
        data => this.userFollowing = data
      );

  }

}
