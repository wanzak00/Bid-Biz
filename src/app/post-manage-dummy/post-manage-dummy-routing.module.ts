import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostManageDummyPage } from './post-manage-dummy.page';

const routes: Routes = [
  {
    path: '',
    component: PostManageDummyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostManageDummyPageRoutingModule {}
