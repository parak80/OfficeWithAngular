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
  reverse = false;

  @Output() setPage: EventEmitter<number> = new EventEmitter();
  @Input() columnHeaders: ColumnHeader[];
  @Input() pageSize: number;
  @Input() dataRows: any[];
  @Input() total: number;
  @Input() page: number;
  @Input() orderBy: string;

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
  }
  getAllTasks() {
    this.appservice.getTasks().subscribe((data: any[]) => {
      console.log(data);
      this.tasks = data;
    });
  }
  getSortIcon() {
    return this.reverse ? 'fa fa-sort-up' : 'fa fa-sort-down';
  }

  getPage(page: number) {
    this.setPage.emit(page);
  }

}
