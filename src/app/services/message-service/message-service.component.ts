import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Subject} from 'rxjs/Subject';
import {Router} from '@angular/router';


@Injectable()
export class MessageService {
  line: string;
  public newUserSubject = new Subject<any>()

  constructor(private http: Http) {

  }

  getAllMessages() {
    return this.http.get('http://localhost:8080/people/messages').map(res => res.json());
  }

  find(data) {
    console.log(data);
    this.line = 'http://localhost:8080/people/messages?search=' + data;
    return this.http.get(this.line).map(res => res.json());

  }

}
