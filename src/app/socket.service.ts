import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

export class SocketService {
  private url = 'http://localhost:8080/fights';
  private socket;

  roll(dice: number, room: string): void {
    this.socket.emit('dice:roll', {
      dice: dice,
      room: room,
    });
  }

  join(room: string): void {
    if (!room) {
      throw new Error('Room cannot null');
    }

    this.socket.emit('room:join', room);
  }

  data(): any {
    return new Observable(observer => {
      this.socket = io(this.url);

      this.socket.on('dice:rolled', data => observer.next(data));
      this.socket.on('room:joined', data => observer.next(data));
      this.socket.on('room:left', data => observer.next(data));

      return () => this.socket.disconnect();
    });
  }
}
