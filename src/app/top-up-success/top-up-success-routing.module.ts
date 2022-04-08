import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopUpSuccessPage } from './top-up-success.page';

const routes: Routes = [
  {
    path: '',
    component: TopUpSuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopUpSuccessPageRoutingModule {}
