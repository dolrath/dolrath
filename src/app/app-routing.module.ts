import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArenaLobbyComponent } from './arena/arena-lobby';
import { CharacterComponent } from './character/character';
import { CharacterCreateComponent } from './character/character-create';
import { PlayerComponent } from './player/player';
import { PlayerCreateComponent } from './player/player-create';
import { PlayersComponent } from './player/players';

const routes: Routes = [
  { path: 'players/:email/characters/create', component: CharacterCreateComponent },
  { path: 'players/:email/characters/:name/arena', component: ArenaLobbyComponent },
  { path: 'players/:email/characters/:name', component: CharacterComponent },
  { path: 'players/create', component: PlayerCreateComponent },
  { path: 'players/:email', component: PlayerComponent },
  { path: 'players', component: PlayersComponent },
  { path: '', redirectTo: '/players', pathMatch: 'full' },
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
