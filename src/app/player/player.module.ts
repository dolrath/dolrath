import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BreadcrumbModule } from '../core/breadcrumb';
import { PlayerService } from '../core/shared/services';

import { PlayerComponent } from './player';
import { PlayerCreateComponent } from './player-create';
import { PlayersComponent } from './players';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    BreadcrumbModule,
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
