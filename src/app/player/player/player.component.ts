import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Player } from '../shared/models';
import { PlayerService } from '../shared/services';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit, OnDestroy {
  private params: Subscription;

  player: Player;

  constructor(
    private playerService: PlayerService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.params = this.route.params.subscribe(params => this.playerService
      .getByEmail(params['email'])
      .then(player => this.player = player));
  }

  ngOnDestroy(): void {
    this.params.unsubscribe();
  }

  go(name: string): void {
    this.router.navigate([`/characters/${name}`]);
  }
}
