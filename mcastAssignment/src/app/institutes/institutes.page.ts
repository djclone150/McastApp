import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-institutes',
  templateUrl: './institutes.page.html',
  styleUrls: ['./institutes.page.scss'],
})
export class InstitutesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToFeedPage(){
    this.router.navigate(['./home/feed']);

  }

}
