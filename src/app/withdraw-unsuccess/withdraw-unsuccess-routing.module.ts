import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WithdrawUnsuccessPage } from './withdraw-unsuccess.page';

const routes: Routes = [
  {
    path: '',
    component: WithdrawUnsuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WithdrawUnsuccessPageRoutingModule {}
