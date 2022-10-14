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

  ngOnInit(): void {
    this.getPaymentData();
  }

  getPaymentData() {
    this._paymentApiService.getPaymentData().subscribe({
      next: (res: any) => {
        console.log(res);
        this.apiData = res;
      }
    });
  }

  openDialog() {
    this.dialog.open(PDetailsDialogComponent);
  }

}
