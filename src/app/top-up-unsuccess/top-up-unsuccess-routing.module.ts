import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopUpUnsuccessPage } from './top-up-unsuccess.page';

const routes: Routes = [
  {
    path: '',
    component: TopUpUnsuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopUpUnsuccessPageRoutingModule {}
