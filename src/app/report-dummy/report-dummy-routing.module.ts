import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportDummyPage } from './report-dummy.page';

const routes: Routes = [
  {
    path: '',
    component: ReportDummyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportDummyPageRoutingModule {}
