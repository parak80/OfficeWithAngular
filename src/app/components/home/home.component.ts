import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { Location } from '@angular/common';

// import { InMemoryDbService } from 'angular-in-memory-web-api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class HomeComponent implements OnInit {
routerLinkActive;

searches = [
  {id: 1, name: 'ärende 1' },
  {id: 2, name: 'ärende 2' },
  {id: 3, name: 'ärende 3' },
  {id: 4, name: 'ärende 4' },
  {id: 5, name: 'ärende 5' },
];
selectedValue = null;
IsHidden = true;
onSelect() {
  this.IsHidden = !this.IsHidden;
}

  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
  }

  onGoBack() {
    this.location.back();
  }
  onSearch(value: any) {
    this.router.navigate(['/search']);
    this.onSearch = value;
    // this.search(1);
  }
  // onSelect(searchId) {
  //   this.selectedSearch = null;
  //   for (const i = 0; i < this.searches.length; i++) {
  //     if (this.searches[i].id == searchId) {
  //       this.selectedSearch = this.searches[i];
  //     }
  //   }
  // }
  // onSelected(row: Search) {
  //   this.router.navigate(['searches', row.id] );
  // }

}
