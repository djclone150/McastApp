import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstitutesPageRoutingModule } from './institutes-routing.module';

import { InstitutesPage } from './institutes.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstitutesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [InstitutesPage]
})
export class InstitutesPageModule {}
