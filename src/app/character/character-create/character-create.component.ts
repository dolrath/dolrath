import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CreateCharacter, Player, Race } from '../shared/models';
import { CharacterService } from '../shared/services';

@Component({
  selector: 'app-character-create',
  templateUrl: './character-create.component.html',
  styleUrls: ['./character-create.component.scss']
})
export class CharacterCreateComponent {
  character = {
    name: '',
    player: {
      email: '',
    },
    race: {
      name: '',
    },
  };

  constructor(
    private characterService: CharacterService,
    private router: Router) { }

  async create() {
    const player = new Player(this.character.player.email);
    const race = new Race(this.character.race.name);
    const character = new CreateCharacter(this.character.name, race, player);

    const characterCreated = await this.characterService.create(this.character);

    this.router.navigate([`/characters/${characterCreated.name}`]);
  }
}
