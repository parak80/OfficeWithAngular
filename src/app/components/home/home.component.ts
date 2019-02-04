import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AppService } from '../../services/app.service';
import { ColumnHeader } from '../../services/app-config.service';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class HomeComponent implements OnInit {

  reverse = false;
  // routerLinkActive;

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
  IsOff = true;
  onSelect() {
    this.IsHidden = !this.IsHidden;
    if ( this.IsHidden === false) {
      this.IsOff = true;
    }
      return false;
  }
  onShowTable() {
    this.IsOff = !this.IsOff;
    if ( this.IsOff === false) {
      this.IsHidden = true;
    }
      return false;
    }

  constructor(
    private router: Router,
    private location: Location,
    private appservice: AppService
    ) { }

  ngOnInit() {
  }

  onGoBack() {
    this.location.back();
  }
  onGoTable(value: any) {
    this.router.navigate(['/table']);
    this.onGoTable = value;
  }
  onSearch(value: any) {
    this.router.navigate(['/search']);
    this.onSearch = value;
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
  navigate(path: string) {
    this.router.navigate([path]);
  }
}

