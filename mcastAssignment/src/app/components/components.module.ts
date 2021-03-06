import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesComponent } from './slides/slides.component';
import { StartComponent } from './start/start.component';
import { LogoComponent } from './logo/logo.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SlidesCoursesComponent } from './slides-courses/slides-courses.component';
import { SlidesInstitutesComponent } from './slides-institutes/slides-institutes.component';
import { SlidesAboutComponent } from './slides-about/slides-about.component';
import { SlidesEventsComponent } from './slides-events/slides-events.component';
import { SlidesContactComponent } from './slides-contact/slides-contact.component';
import { SlidesSettingsComponent } from './slides-settings/slides-settings.component';
import { SlidesNotificationsComponent } from './slides-notifications/slides-notifications.component';



@NgModule({
  declarations: [SlidesComponent, StartComponent, LogoComponent, SlidesCoursesComponent, SlidesInstitutesComponent, SlidesAboutComponent, SlidesEventsComponent, SlidesContactComponent, SlidesSettingsComponent, SlidesNotificationsComponent],
  exports:[SlidesComponent, StartComponent, LogoComponent, SlidesCoursesComponent, SlidesInstitutesComponent, SlidesAboutComponent, SlidesEventsComponent, SlidesContactComponent, SlidesSettingsComponent, SlidesNotificationsComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ]
})
export class ComponentsModule { }
