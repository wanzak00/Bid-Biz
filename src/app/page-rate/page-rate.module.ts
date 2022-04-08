import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageRatePageRoutingModule } from './page-rate-routing.module';

import { PageRatePage } from './page-rate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageRatePageRoutingModule
  ],
  declarations: [PageRatePage]
})
export class PageRatePageModule {}
