import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ArenaSocketService } from '../shared/services';
import { Dice, Player, Room } from '../shared/models';

@Component({
  selector: 'app-arena-lobby',
  templateUrl: './arena-lobby.component.html',
  styleUrls: ['./arena-lobby.component.scss']
})
export class ArenaLobbyComponent implements OnInit, OnDestroy {
  private connections: Subscription[] = [];

  room: Room = new Room('default');
  player: Player = new Player('junolive');
  messages: string[] = [];

  constructor(private socket: ArenaSocketService) { }

  ngOnInit() {
    this.connections.push(this.socket
      .messages
      .subscribe(data => this.messages.push(JSON.stringify(data))));

    this.connections.push(this.socket
      .players
      .subscribe(players => players.forEach(this.room.addPlayer.bind(this.room))));
  }

  ngOnDestroy() {
    this.connections.forEach(connection => connection.unsubscribe());
  }

  roll(value: number): void {
    const dice = new Dice(value);
    this.socket.roll(dice, this.player, this.room);
  }

  join(): void {
    this.socket.join(this.room.name);
  }
}
