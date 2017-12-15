import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { ArenaSocketService, CharacterService } from '../../core/shared/services';
import { Dice, Character, Room, Roll } from '../../core/shared/models';

@Component({
  selector: 'app-arena-lobby',
  templateUrl: './arena-lobby.component.html',
  styleUrls: ['./arena-lobby.component.scss']
})
export class ArenaLobbyComponent implements OnInit, OnDestroy {
  private params: Subscription;
  private connections = new Array<Subscription>();

  room = new Room('default');
  character: Character;
  rolls = new Array<Roll>();
  JSON: any;

  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute,
    private router: Router,
    private arenaService: ArenaSocketService) {
      this.JSON = JSON;
    }

  ngOnInit() {
    this.arenaService.init();

    this.params = this.route.params.subscribe(async params => {
      this.character = await this.characterService.getByName(params['name']);
      this.join();
    });

    this.connections.push(this.arenaService
      .rolled
      .subscribe(this.rolls.push.bind(this.rolls)));

    this.connections.push(this.arenaService
      .characters
      .subscribe(this.room.addCharacters.bind(this.room)));
  }

  ngOnDestroy() {
    this.params.unsubscribe();
    this.connections.forEach(connection => connection.unsubscribe());
  }

  roll(value: number): void {
    const dice = new Dice(value);
    this.arenaService.roll(dice, this.character, this.room);
  }

  join(): void {
    this.arenaService.join(this.room.name, this.character);
  }

  selectCharacter(character: Character): void {
    this.router.navigate([`/players/${character.player.email}/characters/${character.name}`]);
  }
}
