import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Character } from '../../core/shared/models';
import { CharacterService } from '../../core/shared/services';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit, OnDestroy {
  private params: Subscription;

  character: Character;

  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.params = this.route.params.subscribe(async params => this.character = await this.characterService.getByName(params['name']));
  }

  ngOnDestroy(): void {
    this.params.unsubscribe();
  }

  enterArena(name: string): void {
    this.router.navigate([`players/${this.character.player.email}/characters/${name}/arena`]);
  }
}
