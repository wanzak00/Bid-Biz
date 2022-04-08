import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedbackDummyPageRoutingModule } from './feedback-dummy-routing.module';

import { FeedbackDummyPage } from './feedback-dummy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedbackDummyPageRoutingModule
  ],
  declarations: [FeedbackDummyPage]
})
export class FeedbackDummyPageModule {}
