import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesComponent } from './slides/slides.component';
import { StartComponent } from './start/start.component';
import { LogoComponent } from './logo/logo.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SlidesCoursesComponent } from './slides-courses/slides-courses.component';



@NgModule({
  declarations: [SlidesComponent, StartComponent, LogoComponent, SlidesCoursesComponent],
  exports:[SlidesComponent, StartComponent, LogoComponent, SlidesCoursesComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ]
})
export class ComponentsModule { }
