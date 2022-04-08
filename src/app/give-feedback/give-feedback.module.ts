import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GiveFeedbackPageRoutingModule } from './give-feedback-routing.module';

import { GiveFeedbackPage } from './give-feedback.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GiveFeedbackPageRoutingModule
  ],
  declarations: [GiveFeedbackPage]
})
export class GiveFeedbackPageModule {}
