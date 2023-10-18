import { Component } from '@angular/core';
import { DialogElementsExampleDialogComponent } from '../dialog-elements-example-dialog/dialog-elements-example-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-elements-example',
  templateUrl: './dialog-elements-example.component.html',
  styleUrls: ['./dialog-elements-example.component.css']
})
export class DialogElementsExampleComponent {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogElementsExampleDialogComponent);
  }

}
