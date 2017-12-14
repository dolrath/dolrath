import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BreadcrumbModule } from '../core/breadcrumb';
import { JsonModule } from '../core/json';
import { CharacterService, RaceService } from '../core/shared/services';

import { CharacterComponent } from './character';
import { CharacterCreateComponent } from './character-create';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    BreadcrumbModule,
    JsonModule,
  ],
  declarations: [
    CharacterComponent,
    CharacterCreateComponent,
  ],
  providers: [
    CharacterService,
    RaceService,
  ],
})
export class CharacterModule { }
