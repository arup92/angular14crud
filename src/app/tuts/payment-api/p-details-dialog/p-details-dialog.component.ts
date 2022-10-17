import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PaymentApiService } from '../../services/payment-api.service';

@Component({
  selector: 'app-p-details-dialog',
  templateUrl: './p-details-dialog.component.html',
  styleUrls: ['./p-details-dialog.component.scss']
})
export class PDetailsDialogComponent implements OnInit {

  constructor(private _paymentApiService: PaymentApiService, @Inject(MAT_DIALOG_DATA) public POrderData: DialogData) { }

  apiData: any = [];
  paymentData: any = [];
  ELEMENT_DATA: PeriodicElement[] = [];
  displayedColumns: string[] = [];
  dataSource: any = '';

  ngOnInit(): void {
    this.getPaymentOrderDetails();
    this.getPaymentData();
  }

  getPaymentOrderDetails(): any {
    this._paymentApiService.getPaymentOrderDetailsService(this.POrderData.order_no).subscribe({
      next: (data: any) => {
        this.apiData = data;

        this.ELEMENT_DATA = this.apiData;

        this.displayedColumns = ['test_name', 'order_qtn', 'item_amount'];
        this.dataSource = this.ELEMENT_DATA;
      }
    });
  }

  getPaymentData() {
    this._paymentApiService.getPaymentDataService().subscribe({
      next: (res: any) => {
        this.paymentData = res;
      }
    });
  }


  // ELEMENT_DATA: PeriodicElement[] = [
  //   { test: "CT Scan", order_qtn: 2, item_amount: 3 }
  // ];

}

export interface DialogData {
  order_no: string;
}

export interface PeriodicElement {
  test_name: string;
  order_qtn: number;
  item_amount: number;
}