import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../User';
import {UserService} from '../../services/user-service/user-service.component';
import {Router} from '@angular/router';
import {AllMessageComponent} from '../../routes/all-message/all-message.component';


@Component({
  selector: 'app-user-following-card',
  templateUrl: './user-following-card.component.html',
  styleUrls: ['./user-following-card.component.css']
})
export class UserFollowingCardComponent implements OnInit {
  @Input('user') user: User;
  constructor( private router: Router, private userServiceComponent: UserService, private all: AllMessageComponent) { }

  ngOnInit() {
  }

  unFollow(id: number) {
    this.userServiceComponent.unFollow(id).subscribe(
      (response) => console.log(response)
    );
    this.all.ngOnInit();

    if ( this.router.url === '/allUsers') {
      this.router.navigate(['following']);
    } else {
      this.router.navigate(['allUsers']);
    }

}
}
