import { Injectable } from '@angular/core';
import {Message} from './message/message.component';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public messages: Message[];

  constructor() {

    this.messages = [
      new Message('Witajcie w naszej bajce 1'),
      new Message('Witajcie w naszej bajce 2'),
      new Message('Witajcie w naszej bajce 3'),
    ];
  }

  addMessage(text: string) {
    this.messages.push(new Message(text));

  }
  messageClear() {
    this.messages = [];

  }

}
