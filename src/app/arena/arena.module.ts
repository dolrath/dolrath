import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BreadcrumbModule } from '../core/breadcrumb';

import { ArenaLobbyComponent } from './arena-lobby';
import { ArenaSocketService, CharacterService } from '../core/shared/services';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    BreadcrumbModule,
  ],
  declarations: [
    ArenaLobbyComponent,
  ],
  providers: [
    ArenaSocketService,
    CharacterService,
  ],
})
export class ArenaModule { }
