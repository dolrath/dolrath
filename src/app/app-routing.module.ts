import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FightsComponent } from './fights/fights.component';

const routes: Routes = [
  { path: 'fights', component: FightsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
