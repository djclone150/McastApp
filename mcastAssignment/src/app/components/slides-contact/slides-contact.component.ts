import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slides-contact',
  templateUrl: './slides-contact.component.html',
  styleUrls: ['./slides-contact.component.scss'],
})
export class SlidesContactComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  slideOpts = {
    speed: 400
  };

  navigateToFeedPage(){
    this.router.navigate(['./home/feed']);

  }

}
