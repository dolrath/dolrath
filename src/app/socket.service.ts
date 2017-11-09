import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import { environment } from '../environments/environment';


export class SocketService {
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
      this.socket = io(environment.socket.fightsUrl);

      this.socket.on('dice:rolled', data => observer.next(data));
      this.socket.on('room:joined', data => observer.next(data));
      this.socket.on('room:left', data => observer.next(data));

      return () => this.socket.disconnect();
    });
  }
}
