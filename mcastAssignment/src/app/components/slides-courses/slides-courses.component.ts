import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slides-courses',
  templateUrl: './slides-courses.component.html',
  styleUrls: ['./slides-courses.component.scss'],
})
export class SlidesCoursesComponent implements OnInit {

  slideOpts = {
    speed: 400
  };

  constructor(private router: Router) { }

  ngOnInit() {}

  navigateToFeedPage(){
    this.router.navigate(['./home/feed']);

  }

}
