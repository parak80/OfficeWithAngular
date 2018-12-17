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
// tasks: any[] = [];
//  myTask: string;
//  taskEdit: string;
//  editMode: false;
//  loading: true;

// createDb() {

//   let tasks = [
//    {
//      id: 1,
//      description: “Buy Groceries”
//    },
//    {
//      id: 2,
//      description: “Paint the garage”
//    }
//   ];
//   return {
//    tasks: tasks
//   };
//  }
  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
  }

  onGoBack() {
    this.location.back();
  }
  onSearch() {
    this.router.navigate(['/search']);
  }
  // onSelect(searchId) {
  //   this.selectedSearch = null;
  //   for (const i = 0; i < this.searches.length; i++) {
  //     if (this.searches[i].id == searchId) {
  //       this.selectedSearch = this.searches[i];
  //     }
  //   }
  // }

}
