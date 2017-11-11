import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PlayerComponent } from './player';
import { PlayerCreateComponent } from './player-create';
import { PlayersComponent } from './players';
import { PlayerService } from './shared/services';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
  ],
  declarations: [
    PlayerComponent,
    PlayerCreateComponent,
    PlayersComponent,
  ],
  providers: [
    PlayerService,
  ],
})
export class PlayerModule { }
