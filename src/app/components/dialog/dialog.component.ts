import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { validateHorizontalPosition } from '@angular/cdk/overlay';
// import { Popup } from 'ng2-opd-popup';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  id: number;
  // selectedOption: string;
  constructor(
    public dialog: MatDialog
    ) {}

    openDialog(id: any) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;

      this.dialog.open(DialogComponent[id], dialogConfig);

      // let dialogRef = this.dialog.open(DialogComponent);
      // dialogRef.afterClosed().subscribe(result => {
      //   this.selectedOption = result;
  }

    closeDialog() {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;

      this.dialog.closeAll();
      // close();
  }

  // let dialogRef = dialog.open(DialogComponent, {
  //   height: '400px',
  //   width: '600px',
  // });
  // dialogRef.afterClosed().subscribe(result => {
  //   console.log(`Dialog result: ${result}`);
  // });

  // dialogRef.close();

}
