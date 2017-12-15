import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import * as io from 'socket.io-client';

import { environment } from '../../../../environments/environment';
import { Dice, Character, Roll, Room } from '../models';

@Injectable()
export class ArenaSocketService {
  private socket;

  init(): void {
    this.socket = io(environment.socket.fightsUrl);
  }

  get rolled(): Observable<Roll> {
    return new Observable(observer => {
      this.socket.on('dice:rolled', data => observer.next(this.mapRolled(data)));

      return () => this.socket.disconnect();
    });
  }

  get characters(): Observable<Array<Character>> {
    return new Observable(observer => {
      this.socket.on('room:joined', data => observer.next(this.mapCharacters(data)));
      this.socket.on('room:left', data => observer.next(this.mapCharacters(data)));

      return () => this.socket.disconnect();
    });
  }

  join(room: string, character: Character): void {
    if (!room) {
      throw new Error('Room cannot null');
    }

    const message = {
      room: room,
      character: {
        name: character.name,
      },
    };

    this.socket.emit('room:join', message);
  }

  roll(dice: Dice, character: Character, room: Room): void {
    if (!room) {
      throw new Error('Room cannot null');
    }

    const message = {
      character: {
        name: character.name,
      },
      room: room.name,
      dice: dice,
    };

    this.socket.emit('dice:roll', message);
  }

  private mapCharacters(data: any): Array<Character> {
    return data.characters.map(name => new Character(name));
  }

  private mapRolled(data: any): Roll {
    const dice = new Dice(data.dice.value, data.dice.result);
    const character = new Character(data.character.name);

    return new Roll(dice, character);
  }
}
