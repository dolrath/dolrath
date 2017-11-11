import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { JsonModule } from '../core/json';

import { CharacterComponent } from './character';
import { CharacterCreateComponent } from './character-create';
import { CharacterService } from './shared/services';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    JsonModule,
  ],
  declarations: [
    CharacterComponent,
    CharacterCreateComponent,
  ],
  providers: [
    CharacterService,
  ],
})
export class CharacterModule { }
