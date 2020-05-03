import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slides-institutes',
  templateUrl: './slides-institutes.component.html',
  styleUrls: ['./slides-institutes.component.scss'],
})
export class SlidesInstitutesComponent implements OnInit {

  slideOpts = {
    speed: 400
  };

  constructor(private router: Router) { }

  ngOnInit() {}

  navigateToFeedPage(){
    this.router.navigate(['./home/feed']);

  }

}
