import {Component, OnInit, ViewChild} from '@angular/core';
import {MessageService} from '../../services/message-service/message-service.component';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  @ViewChild('newUserForm') newUserForm: NgForm;
  clickMessage = '';
  url: string;
  messsage: Array<any>;
  constructor(private messageService: MessageService) { }

  ngOnInit() {
  this.messageService.getAllMessages()
      .subscribe(
        data => this.messsage = data
      );
  }

  find(data1): void {
    this.clickMessage = data1;
    if ( this.clickMessage !== '') {
      this.messageService.find(this.clickMessage)
        .subscribe(
          data => this.messsage = data
        );
    } else {
      this.ngOnInit();
    }
  }

}
