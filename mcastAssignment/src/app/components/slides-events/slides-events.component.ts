import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slides-events',
  templateUrl: './slides-events.component.html',
  styleUrls: ['./slides-events.component.scss'],
})
export class SlidesEventsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  slideOpts = {
    speed: 400
  };

  navigateToFeedPage(){
    this.router.navigate(['./home/feed']);

  }

}
