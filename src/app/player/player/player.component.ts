import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Player, Character } from '../../core/shared/models';
import { CharacterService, PlayerService } from '../../core/shared/services';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit, OnDestroy {
  private params: Subscription;
  private email: string;

  player: Player;
  characters = new Array<Character>();

  constructor(
    private characterService: CharacterService,
    private playerService: PlayerService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.params = this.route.params.subscribe(async params => {
      this.email = params['email'];

      this.player = await this.playerService.getByEmail(this.email);
      this.getCharacters();
    });
  }

  ngOnDestroy(): void {
    this.params.unsubscribe();
  }

  selectCharacter(name: string): void {
    this.router.navigate([`/players/${this.email}/characters/${name}`]);
  }

  async deleteCharacter(name: string): Promise<void> {
    await this.characterService.delete(name);
    await this.getCharacters();
  }

  createCharacter(): void {
    this.router.navigate([`/players/${this.email}/characters/create`]);
  }

  private async getCharacters(): Promise<void> {
    this.characters = await this.characterService.getByEmail(this.email);
  }
}
