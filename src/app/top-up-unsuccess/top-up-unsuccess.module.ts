import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopUpUnsuccessPageRoutingModule } from './top-up-unsuccess-routing.module';

import { TopUpUnsuccessPage } from './top-up-unsuccess.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopUpUnsuccessPageRoutingModule
  ],
  declarations: [TopUpUnsuccessPage]
})
export class TopUpUnsuccessPageModule {}
