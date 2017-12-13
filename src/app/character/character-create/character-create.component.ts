import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { CreateCharacter, Player, Race } from '../../core/shared/models';
import { CharacterService } from '../../core/shared/services';

@Component({
  selector: 'app-character-create',
  templateUrl: './character-create.component.html',
  styleUrls: ['./character-create.component.scss']
})
export class CharacterCreateComponent implements OnInit, OnDestroy {
  private params: Subscription;

  email: string;
  character = {
    name: '',
    race: {
      name: '',
    },
  };

  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.params = this.route.params.subscribe(async params => this.email = params['email']);
  }

  ngOnDestroy(): void {
    this.params.unsubscribe();
  }

  async create(): Promise<void> {
    const player = new Player(this.email);
    const race = new Race(this.character.race.name);
    const character = new CreateCharacter(this.character.name, race, player);
    const { name } = await this.characterService.create(character);

    this.router.navigate([`/players/${this.email}/characters/${name}`]);
  }
}
