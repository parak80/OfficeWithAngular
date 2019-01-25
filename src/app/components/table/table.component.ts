import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ColumnHeader } from '../../services/app-config.service';
import { MatDialog, MatDialogConfig} from '@angular/material';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  tasks: any[] = [];
  myTask: string;
  id: number;
  name: string;
  documentId: number;

  orderColumn = '';
  reverse = false;

  @Input() columnHeaders: ColumnHeader[];
  @Input() pageSize: number;
  @Input() dataRows: any[];
  @Input() total: number;
  @Input() page: number;
  @Input() orderBy: string;

  @Output() setOrderBy: EventEmitter<string> = new EventEmitter();
  @Output() setPage: EventEmitter<number> = new EventEmitter();
  @Output() select: EventEmitter<any> = new EventEmitter();

  get enabled() {
    return (this.dataRows && this.dataRows.length > 0);
  }
  constructor(
    private dialog: MatDialog,
    private appservice: AppService
    ) { }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    // this.dialog.open(CourseDialogComponent, dialogConfig);
  }
  ngOnInit() {
    this.getAllTasks();
    if (this.orderBy) {
      const parts = this.orderBy.split(' ');
      this.orderColumn = parts[0];
      this.reverse = parts[1] ===  'asc' || parts[1] ===  'ASC';
    }
  }
  getAllTasks() {
    this.appservice.getTasks().subscribe((data: any[]) => {
      console.log(data);
      this.tasks = data;
    });
  }

  getPage(page: number) {
    this.setPage.emit(page);
  }
  setOrder(value: string) {
    console.log(value);
    if (!this.dataRows || this.dataRows.length === 0) {
      return;
    }

    if (this.orderColumn === value) {
      this.reverse = !this.reverse;
    }
    this.orderColumn = value;

    const orderBy = this.orderColumn + (this.reverse ? ' asc' : ' desc');
    // console.log(orderBy);
    this.setOrderBy.emit(orderBy);
  }
  getSortIcon() {
    return this.reverse ? 'fa fa-sort-up' : 'fa fa-sort-down';
  }
}
