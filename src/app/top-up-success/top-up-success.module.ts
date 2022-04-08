import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopUpSuccessPageRoutingModule } from './top-up-success-routing.module';

import { TopUpSuccessPage } from './top-up-success.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopUpSuccessPageRoutingModule
  ],
  declarations: [TopUpSuccessPage]
})
export class TopUpSuccessPageModule {}
