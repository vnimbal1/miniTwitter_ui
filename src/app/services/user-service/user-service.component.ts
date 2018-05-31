import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {CookieXSRFStrategy, Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';


@Injectable()
export class UserService {
  line: string;
  public messageSubject = new Subject<any>()

  constructor(private router: Router, private http: Http) {
  }

  getAllNotFollowing() {
    return this.http.get('http://localhost:8080/people/getAllNotFollowing').map(res => res.json());
  }

  findPopular() {
    return this.http.get('http://localhost:8080/people/popular').map(res => res.json());
  }

  follow(id) {
    this.line = 'http://localhost:8080/people/follow/' + id;
    return this.http.post(this.line, null);
  }

  unFollow(id) {
    this.line = 'http://localhost:8080/people/unfollow/' + id;
    return this.http.delete(this.line);
  }

  getAllFollowers() {
    return this.http.get('http://localhost:8080/people/followers').map(res => res.json());
  }

  getAllFollowing() {
    return this.http.get('http://localhost:8080/people/following').map(res => res.json());
  }
}
