import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogComponent } from '../dialog/dialog.component';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-crud-app',
  templateUrl: './crud-app.component.html',
  styleUrls: ['./crud-app.component.scss']
})
export class CrudAppComponent implements OnInit {

  displayedColumns: string[] = ['productName', 'category', 'date', 'freshness', 'price', 'comment', 'action'];
  matTableDataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) matPaginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  constructor(private _dialog: MatDialog, private _apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllProducts();
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
    this._dialog.open(DialogComponent, {
      width: '30%',
      data: row
    }).afterClosed().subscribe(val => {
      if (val === "update") {
        this.getAllProducts();
      }
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
