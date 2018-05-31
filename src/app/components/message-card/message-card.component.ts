import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../../Message';

@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.css']
})
export class MessageCardComponent implements OnInit {
  @Input('message') message: Message;

  constructor() {
  }

  ngOnInit() {
  }

}
