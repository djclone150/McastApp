import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slides-notifications',
  templateUrl: './slides-notifications.component.html',
  styleUrls: ['./slides-notifications.component.scss'],
})
export class SlidesNotificationsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  slideOpts = {
    speed: 400
  };

}
