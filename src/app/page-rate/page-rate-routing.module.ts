import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageRatePage } from './page-rate.page';

const routes: Routes = [
  {
    path: '',
    component: PageRatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRatePageRoutingModule {}
