import {Component, Input, OnInit} from '@angular/core';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  private messages: Message[];

  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
    this.messages = this.messageService.addMessage();
  }
}

export class Message {
  messageContent: string;


  constructor(messageContent: string) {
    this.messageContent = messageContent;
  }
}


