import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slides-settings',
  templateUrl: './slides-settings.component.html',
  styleUrls: ['./slides-settings.component.scss'],
})
export class SlidesSettingsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  slideOpts = {
    speed: 400
  };

}
