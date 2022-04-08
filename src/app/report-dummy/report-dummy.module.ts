import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportDummyPageRoutingModule } from './report-dummy-routing.module';

import { ReportDummyPage } from './report-dummy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportDummyPageRoutingModule
  ],
  declarations: [ReportDummyPage]
})
export class ReportDummyPageModule {}
