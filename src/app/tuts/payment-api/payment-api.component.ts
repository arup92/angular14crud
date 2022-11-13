import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaymentApiService } from '../services/payment-api.service';
import { PDetailsDialogComponent } from './p-details-dialog/p-details-dialog.component';

@Component({
  selector: 'app-payment-api',
  templateUrl: './payment-api.component.html',
  styleUrls: ['./payment-api.component.scss']
})
export class PaymentApiComponent implements OnInit {

  constructor(private _paymentApiService: PaymentApiService, private dialog: MatDialog) { }

  apiData: any = [];
  order_no: string = '';
  actionBtn: number = 1;

  ngOnInit(): void {
    this.getPaymentData();
  }

  getPaymentData() {
    this._paymentApiService.getPaymentDataService().subscribe({
      next: (res: any) => {
        console.log(res);
        this.apiData = res;
        this.order_no = res[0].order_no;

        this.actionBtnSet(res);
      }
    });
  }

  openDialog() {
    this.dialog.open(PDetailsDialogComponent, {
      width: '450px',
      panelClass: 'details-dialog',
      data: {
        order_no: this.order_no
      }
    });
  }

  actionBtnSet(res: any) {
    if (res[0].is_collect == 1) {
      this.actionBtn = 0;
    }
  }



}