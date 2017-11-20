import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonPairComponent } from './json-pair';
import { JsonObjectComponent } from './json-object';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    JsonPairComponent,
    JsonObjectComponent,
  ],
  exports: [
    JsonObjectComponent,
    JsonPairComponent,
  ],
})
export class JsonModule { }
