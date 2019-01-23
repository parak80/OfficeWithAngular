import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { Location } from '@angular/common';
import { AppService } from '../../services/app.service';
import { FakeBackendService } from '../../services/fake-backend.service';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ColumnHeader } from '../../services/app-config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class HomeComponent implements OnInit {

  reverse = false;
  routerLinkActive;
  tasks: any[] = [];
  myTask: string;
  @Output() setPage: EventEmitter<number> = new EventEmitter();
  @Input() columnHeaders: ColumnHeader[];
  @Input() pageSize: number;
  @Input() dataRows: any[];
  @Input() total: number;
  @Input() page: number;
  @Input() orderBy: string;

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

  constructor(
    private router: Router,
    private location: Location,
    private appservice: AppService
    ) { }

  ngOnInit() {
    this.getAllTasks();
  }
  getAllTasks() {
    this.appservice.getTasks().subscribe((data: any[]) => {
      console.log(data);
      this.tasks = data;
    });
  }
  onGoBack() {
    this.location.back();
  }
  onSearch(value: any) {
    this.router.navigate(['/search']);
    this.onSearch = value;
    // this.search(1);
  }

  getSortIcon() {
    return this.reverse ? 'fa fa-sort-up' : 'fa fa-sort-down';
  }

  getPage(page: number) {
    this.setPage.emit(page);
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
