import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageFeedbackPage } from './manage-feedback.page';

const routes: Routes = [
  {
    path: '',
    component: ManageFeedbackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageFeedbackPageRoutingModule {}
