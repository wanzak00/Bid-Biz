import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedbackSubmittedPageRoutingModule } from './feedback-submitted-routing.module';

import { FeedbackSubmittedPage } from './feedback-submitted.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedbackSubmittedPageRoutingModule
  ],
  declarations: [FeedbackSubmittedPage]
})
export class FeedbackSubmittedPageModule {}
