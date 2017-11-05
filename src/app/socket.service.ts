import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

export class SocketService {
  private url = 'http://localhost:8080';
  private socket;

  roll(dice: any): void {
    this.socket.emit('roll', dice);
  }

  data(): any {
    return new Observable(observer => {
      this.socket = io(this.url);

      this.socket.on('roll', data => observer.next(data));

      return () => this.socket.disconnect();
    });
  }
}
