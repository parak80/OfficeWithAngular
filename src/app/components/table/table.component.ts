import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ColumnHeader } from '../../services/app-config.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  tasks: any[] = [];
  myTask: string;

  reverse = false;
  @Output() setPage: EventEmitter<number> = new EventEmitter();
  @Input() columnHeaders: ColumnHeader[];
  @Input() pageSize: number;
  @Input() dataRows: any[];
  @Input() total: number;
  @Input() page: number;
  @Input() orderBy: string;

  constructor() { }

  ngOnInit() {
  }
  getSortIcon() {
    return this.reverse ? 'fa fa-sort-up' : 'fa fa-sort-down';
  }

  getPage(page: number) {
    this.setPage.emit(page);
  }
}
