import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProspectusService } from '../services/prospectus.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-institute',
  templateUrl: './institute.page.html',
  styleUrls: ['./institute.page.scss'],
})
export class InstitutePage implements OnInit {

  slideOpts = {
    speed: 400
  };

   /**
     * The institute to be used with this page.
     */


  public institute: any = null;

  constructor(
        public route: ActivatedRoute,
        public prospectusService: ProspectusService,
        private router: Router
  ) { }

  ngOnInit() {
        const code = this.route.snapshot.params.code;
        this.institute = this.prospectusService.getInstitute(code);

        console.log(this.institute);
  }

  navigateToFeedPage(){
    this.router.navigate(['./home/feed']);

  }

}
