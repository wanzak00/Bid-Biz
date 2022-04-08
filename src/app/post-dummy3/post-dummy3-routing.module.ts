import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostDummy3Page } from './post-dummy3.page';

const routes: Routes = [
  {
    path: '',
    component: PostDummy3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostDummy3PageRoutingModule {}
