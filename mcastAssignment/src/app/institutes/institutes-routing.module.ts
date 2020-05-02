import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstitutesPage } from './institutes.page';

const routes: Routes = [
  {
    path: '',
    component: InstitutesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstitutesPageRoutingModule {}
