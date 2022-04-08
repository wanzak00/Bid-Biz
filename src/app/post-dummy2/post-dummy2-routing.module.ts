import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostDummy2Page } from './post-dummy2.page';

const routes: Routes = [
  {
    path: '',
    component: PostDummy2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostDummy2PageRoutingModule {}
