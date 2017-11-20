import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Character, Player } from '../shared/models';
import { PlayerService } from '../shared/services';

@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.scss']
})
export class PlayerCreateComponent {
  player = {
    email: '',
  };

  constructor(
    private playerService: PlayerService,
    private router: Router) { }

  async create() {
    const player = new Player(this.player.email, new Array<Character>());

    const playerCreated = await this.playerService.create(player);

    this.router.navigate([`/players/${playerCreated.email}`]);
  }
}
