import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { HomeRouter } from './home.router';
import { ComponentsModule } from '../components/components.module';
import { FeedPageModule } from '../pages/feed/feed.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    HomeRouter,
    FeedPageModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
