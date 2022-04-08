import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostDummy2PageRoutingModule } from './post-dummy2-routing.module';

import { PostDummy2Page } from './post-dummy2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostDummy2PageRoutingModule
  ],
  declarations: [PostDummy2Page]
})
export class PostDummy2PageModule {}
