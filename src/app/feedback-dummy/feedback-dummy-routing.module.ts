import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedbackDummyPage } from './feedback-dummy.page';

const routes: Routes = [
  {
    path: '',
    component: FeedbackDummyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedbackDummyPageRoutingModule {}
