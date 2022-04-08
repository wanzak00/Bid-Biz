import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostDummy1PageRoutingModule } from './post-dummy1-routing.module';

import { PostDummy1Page } from './post-dummy1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostDummy1PageRoutingModule
  ],
  declarations: [PostDummy1Page]
})
export class PostDummy1PageModule {}
