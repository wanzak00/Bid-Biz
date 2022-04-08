import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedbackSubmittedPage } from './feedback-submitted.page';

const routes: Routes = [
  {
    path: '',
    component: FeedbackSubmittedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedbackSubmittedPageRoutingModule {}
