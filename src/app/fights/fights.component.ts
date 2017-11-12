import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { SocketService } from '../socket.service';

import { Dice, Player, Room } from './';

@Component({
  selector: 'app-fights',
  templateUrl: './fights.component.html',
  styleUrls: ['./fights.component.css']
})
export class FightsComponent implements OnInit, OnDestroy {
  private connections: Subscription[] = [];

  room: Room;
  roomName: string;
  messages: string[] = [];

  constructor(private socket: SocketService) { }

  ngOnInit() {
    this.connections.push(this.socket
      .messages
      .subscribe(data => this.messages.push(JSON.stringify(data))));

    this.connections.push(this.socket
      .room
      .subscribe(room => this.room = room));
  }

  ngOnDestroy() {
    this.connections.forEach(connection => connection.unsubscribe());
  }

  roll(value: number): void {
    const dice = new Dice(value, new Player(this.room.name));
    this.socket.roll(dice);
  }

  join(): void {
    this.room = new Room(this.roomName);
    this.socket.join(this.room.name);
  }
}
