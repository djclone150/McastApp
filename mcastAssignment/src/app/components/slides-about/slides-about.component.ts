import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slides-about',
  templateUrl: './slides-about.component.html',
  styleUrls: ['./slides-about.component.scss'],
})
export class SlidesAboutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  slideOpts = {
    speed: 400
  };

  navigateToFeedPage(){
    this.router.navigate(['./home/feed']);

  }

}
