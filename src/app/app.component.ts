import { Component, OnInit, ViewChild } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { ApiService } from './services/api.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'angular14crud';

  displayedColumns: string[] = ['productName', 'category', 'date', 'freshness', 'price', 'comment', 'action'];
  matTableDataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) matPaginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  constructor(private dialog: MatDialog, private _apiService: ApiService) {

  }
  ngOnInit(): void {
    this.getAllProducts();
  }

  // Open the dialog component  on click
  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '30%'
    });
  }

  getAllProducts() {
    this._apiService.getProduct()
      .subscribe({
        next: (res: any) => {
          // console.log(res);
          this.matTableDataSource = new MatTableDataSource(res);
          this.matTableDataSource.paginator = this.matPaginator;
          this.matTableDataSource.sort = this.matSort;
        },
        error: (err) => {
          console.log("Error: " + err);
        }
      });
  }

  editProduct(row: any) {
    this.dialog.open(DialogComponent, {
      width: '30%',
      data: row
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.matTableDataSource.filter = filterValue.trim().toLowerCase();

    if (this.matTableDataSource.paginator) {
      this.matTableDataSource.paginator.firstPage();
    }
  }
}
