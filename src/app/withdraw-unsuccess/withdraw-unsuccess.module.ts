import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WithdrawUnsuccessPageRoutingModule } from './withdraw-unsuccess-routing.module';

import { WithdrawUnsuccessPage } from './withdraw-unsuccess.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WithdrawUnsuccessPageRoutingModule
  ],
  declarations: [WithdrawUnsuccessPage]
})
export class WithdrawUnsuccessPageModule {}
