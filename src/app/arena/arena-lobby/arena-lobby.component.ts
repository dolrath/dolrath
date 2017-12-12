import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { ArenaSocketService, CharacterService } from '../../core/shared/services';
import { Dice, Character, Room } from '../../core/shared/models';

@Component({
  selector: 'app-arena-lobby',
  templateUrl: './arena-lobby.component.html',
  styleUrls: ['./arena-lobby.component.scss']
})
export class ArenaLobbyComponent implements OnInit, OnDestroy {
  private params: Subscription;
  private connections: Subscription[] = [];

  room: Room = new Room('default');
  character: Character;
  messages: string[] = [];

  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute,
    private router: Router,
    private socket: ArenaSocketService) { }

  ngOnInit() {
    this.params = this.route.params.subscribe(async params => this.character = await this.characterService.getByName(params['name']));

    this.connections.push(this.socket
      .messages
      .subscribe(data => this.messages.push(JSON.stringify(data))));

    this.connections.push(this.socket
      .players
      .subscribe(players => players.forEach(this.room.addPlayer.bind(this.room))));

    this.join();
  }

  ngOnDestroy() {
    this.params.unsubscribe();
    this.connections.forEach(connection => connection.unsubscribe());
  }

  roll(value: number): void {
    const dice = new Dice(value);
    this.socket.roll(dice, this.character, this.room);
  }

  join(): void {
    this.socket.join(this.room.name);
  }
}
