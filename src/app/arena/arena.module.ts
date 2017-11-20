import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ArenaLobbyComponent } from './arena-lobby';
import { ArenaSocketService } from './shared/services';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
  ],
  declarations: [
    ArenaLobbyComponent,
  ],
  providers: [
    ArenaSocketService,
  ],
})
export class ArenaModule { }
