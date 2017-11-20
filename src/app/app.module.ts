import { NgModule } from '@angular/core';

import { AppComponent, AppRoutingModule } from '.';
import { ArenaModule } from './arena';
import { CharacterModule } from './character';
import { PlayerModule } from './player';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    ArenaModule,
    CharacterModule,
    PlayerModule,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
