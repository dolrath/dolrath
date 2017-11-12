import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

import { environment } from '../environments/environment';
import { Dice, Player, Room } from './fights';

@Injectable()
export class SocketService {
  private socket;

  constructor() {
    this.socket = io(environment.socket.fightsUrl);
  }

  get messages(): Observable<any> {
    return new Observable(observer => {
      this.socket.on('dice:rolled', data => observer.next(data));
      this.socket.on('room:joined', data => observer.next(data));
      this.socket.on('room:left', data => observer.next(data));

      return () => this.socket.disconnect();
    });
  }

  get room(): Observable<Room> {
    return new Observable(observer => {
      this.socket.on('room:joined', data => observer.next(this.getRoom(data)));
      this.socket.on('room:left', data => observer.next(this.getRoom(data)));

      return () => this.socket.disconnect();
    });
  }

  roll(dice: Dice): void {
    if (!dice.player.room) {
      throw new Error('Room cannot null');
    }

    this.socket.emit('dice:roll', dice);
  }

  join(room: string): void {
    if (!room) {
      throw new Error('Room cannot null');
    }

    this.socket.emit('room:join', room);
  }

  private getRoom(data: any): Room {
    const room = new Room(data.room.name);
    data.room.players.forEach(player => room.addPlayer(new Player(room.name, player.id)));

    return room;
  }
}
