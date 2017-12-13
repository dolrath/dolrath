import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbComponent } from './breadcrumb';
import { BreadcrumbItemComponent } from './breadcrumb-item';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BreadcrumbComponent,
    BreadcrumbItemComponent,
  ],
  exports: [
    BreadcrumbComponent,
    BreadcrumbItemComponent,
  ],
})
export class BreadcrumbModule { }
