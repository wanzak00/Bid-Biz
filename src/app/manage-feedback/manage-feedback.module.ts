import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageFeedbackPageRoutingModule } from './manage-feedback-routing.module';

import { ManageFeedbackPage } from './manage-feedback.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageFeedbackPageRoutingModule
  ],
  declarations: [ManageFeedbackPage]
})
export class ManageFeedbackPageModule {}
