import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  constructor(private dialog: MatDialog) { }

    openDialog() {

      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      this.dialog.open(DialogComponent, dialogConfig);
  }
}
