import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostManageDummyPageRoutingModule } from './post-manage-dummy-routing.module';

import { PostManageDummyPage } from './post-manage-dummy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostManageDummyPageRoutingModule
  ],
  declarations: [PostManageDummyPage]
})
export class PostManageDummyPageModule {}
