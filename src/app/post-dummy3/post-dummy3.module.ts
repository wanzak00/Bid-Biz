import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostDummy3PageRoutingModule } from './post-dummy3-routing.module';

import { PostDummy3Page } from './post-dummy3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostDummy3PageRoutingModule
  ],
  declarations: [PostDummy3Page]
})
export class PostDummy3PageModule {}
