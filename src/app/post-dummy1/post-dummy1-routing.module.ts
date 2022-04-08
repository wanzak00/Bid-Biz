import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostDummy1Page } from './post-dummy1.page';

const routes: Routes = [
  {
    path: '',
    component: PostDummy1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostDummy1PageRoutingModule {}
