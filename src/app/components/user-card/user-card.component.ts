import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../User';
import {UserService} from '../../services/user-service/user-service.component';
import {Router} from '@angular/router';
import {AllMessageComponent} from '../../routes/all-message/all-message.component';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input('user') user: User;
  constructor(private router: Router , private userServiceComponent: UserService, private all: AllMessageComponent) { }

  ngOnInit() {
  }

  follow(id: number) {

    this.userServiceComponent.follow(id).subscribe(
      (response) => console.log(response)
    );
    this.all.ngOnInit();
    this.router.navigate(['following']);
  }
}
