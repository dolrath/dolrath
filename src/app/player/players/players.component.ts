import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Player } from '../../core/shared/models';
import { PlayerService } from '../../core/shared/services';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  players: Array<Player>;

  constructor(
    private playerService: PlayerService,
    private router: Router) { }

  async ngOnInit(): Promise<void> {
    await this.getPlayers();
  }

  selectPlayer(email: string): void {
    this.router.navigate([`/players/${email}`]);
  }

  createPlayer(): void {
    this.router.navigate(['/players/create']);
  }

  async deletePlayer(email: string): Promise<void> {
    await this.playerService.delete(email);
    await this.getPlayers();
  }

  private async getPlayers(): Promise<void> {
    this.players = await this.playerService.get();
  }
}
