import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArenaLobbyComponent } from './arena/arena-lobby';
import { CharacterComponent } from './character/character';
import { CharacterCreateComponent } from './character/character-create';
import { PlayerComponent } from './player/player';
import { PlayerCreateComponent } from './player/player-create';
import { PlayersComponent } from './player/players';

const routes: Routes = [
  { path: 'arena', component: ArenaLobbyComponent },
  { path: 'characters/create', component: CharacterCreateComponent },
  { path: 'characters/:name', component: CharacterComponent },
  { path: 'players/create', component: PlayerCreateComponent },
  { path: 'players/:email', component: PlayerComponent },
  { path: 'players', component: PlayersComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
