import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedSinglePageRoutingModule } from './feed-single-routing.module';

import { FeedSinglePage } from './feed-single.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedSinglePageRoutingModule
  ],
  declarations: [FeedSinglePage]
})
export class FeedSinglePageModule {}
