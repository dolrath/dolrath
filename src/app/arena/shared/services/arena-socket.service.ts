import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import * as io from 'socket.io-client';

import { environment } from '../../../../environments/environment';
import { Dice, Player, Room } from '../models';

@Injectable()
export class ArenaSocketService {
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

  get players(): Observable<Array<Player>> {
    return new Observable(observer => {
      this.socket.on('room:joined', data => observer.next(this.getPlayers(data)));
      this.socket.on('room:left', data => observer.next(this.getPlayers(data)));

      return () => this.socket.disconnect();
    });
  }

  join(room: string): void {
    if (!room) {
      throw new Error('Room cannot null');
    }
    const message = {
      room: room,
    };

    this.socket.emit('room:join', message);
  }

  roll(dice: Dice, player: Player, room: Room): void {
    if (!room) {
      throw new Error('Room cannot null');
    }

    const message = {
      player: {
        email: player.email,
      },
      room: room.name,
      dice: dice,
    };

    this.socket.emit('dice:roll', message);
  }

  private getPlayers(data: any): Array<Player> {
    return data.clients.map(client => new Player(client));
  }
}
