import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';

import {ChatMessage} from '../models/chat-message.model';
import {FirebaseListObservable} from "angularfire2/database-deprecated";

@Injectable()
export class ChatService {
  user: any;
  chatMessages: FirebaseListObservable<ChatMessage[]>;
  chatMessage: ChatMessage;
  userName: Observable<string>;

  constructor(private db: AngularFireDatabase,
              private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.user = auth;
      }
    });
  }

  sendMessage(msg: string) {
    const timeStamp = this.getTimeStamp();
    const email = this.user.email;
    this.chatMessages = this.getMessages();
    this.chatMessages.push({
      message: msg,
      timeSent: timeStamp,
      username: this.userName,
      email: email
    });
  }

  getMessages(): FirebaseListObservable<ChatMessage[]> {
    return this.db.list('messages', {
      query: {
        limitToLast: 25,
        orderByKey: true
      }
    });
  }

  private getTimeStamp() {
    const now = new Date();
    const date = now.getUTCFullYear() + '/' + (now.getUTCMonth() + 1) + '/' + now.getUTCDay();
    const time = now.getUTCHours() + ':' + (now.getUTCMinutes() + 1) + ':' + now.getUTCSeconds();

    return (date + ' ' + time);
  }


}
