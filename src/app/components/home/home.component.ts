import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class HomeComponent implements OnInit {
routerLinkActive;
  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
  }

  onGoBack() {
    this.location.back();
  }
  onClick() {
    this.router.navigate(['./search']);
  }
// onSelect() {
//   this.router.navigate(['/search']);
// }
}
