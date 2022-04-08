import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DummyBuyerPageRoutingModule } from './dummy-buyer-routing.module';

import { DummyBuyerPage } from './dummy-buyer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DummyBuyerPageRoutingModule
  ],
  declarations: [DummyBuyerPage]
})
export class DummyBuyerPageModule {}
