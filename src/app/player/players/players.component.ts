import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Player } from '../shared/models';
import { PlayerService } from '../shared/services';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  players = new Array<Player>();

  constructor(
    private playerService: PlayerService,
    private router: Router) { }

  ngOnInit(): void {
    this.playerService
      .get()
      .then(players => this.players = players);
  }

  go(email: string): void {
    this.router.navigate([`/players/${email}`]);
  }
}
