import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Character, Player } from '../../core/shared/models';
import { PlayerService } from '../../core/shared/services';

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

  async create(): Promise<void> {
    const player = new Player(this.player.email);
    const { email } = await this.playerService.create(player);

    this.router.navigate([`/players/${email}`]);
  }
}
