import { Component } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular14crud';

  constructor(private dialog : MatDialog) {

  }

  // Open the dialog component  on click
  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '30%'
    });
  }
}
