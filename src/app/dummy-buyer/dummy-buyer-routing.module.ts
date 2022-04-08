import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DummyBuyerPage } from './dummy-buyer.page';

const routes: Routes = [
  {
    path: '',
    component: DummyBuyerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DummyBuyerPageRoutingModule {}
