import { Component, OnInit } from '@angular/core';
import { ProspectusService } from '../services/prospectus.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  /**
     * The institute list available to this page.
     */
  public institutes: any[] = [];

  constructor(
    // if to be used in HTML, use public or ionic will give errors on build
    public prospectusService: ProspectusService
  ) { }

  ngOnInit() {
        this.institutes = this.prospectusService.getInstitutes();
  }

}
