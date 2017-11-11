import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Character } from '../shared/models';
import { CharacterService } from '../shared/services';

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
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.params = this.route.params.subscribe(params => this.characterService
      .getByName(params['name'])
      .then(character => this.character = character));
  }

  ngOnDestroy(): void {
    this.params.unsubscribe();
  }
}
