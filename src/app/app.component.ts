import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'angular14crud';

  constructor(private _dialog: MatDialog, private _apiService: ApiService) {

  }
  ngOnInit(): void {
  }

  // Open the dialog component  on click
  openDialog() {
    const dialogRef = this._dialog.open(DialogComponent, {
      width: '30%'
    }).afterClosed().subscribe(
      val => {
        if (val === "save") {
        }
      });
  };
}
