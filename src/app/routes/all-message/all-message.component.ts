import {Component, Injectable, OnInit} from '@angular/core';
import {MessageService} from '../../services/message-service/message-service.component';

@Component({
  selector: 'app-all-message',
  templateUrl: './all-message.component.html',
  styleUrls: ['./all-message.component.css']
})

@Injectable()
export class AllMessageComponent implements OnInit {
  messsage: Array<any>;

  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
    this.messageService.getAllMessages()
      .subscribe(
        data => this.messsage = data
      );
  }

}
