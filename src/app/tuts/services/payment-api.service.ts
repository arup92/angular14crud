import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentApiService {

  constructor(private _httpClient: HttpClient) { }

  customUrl: string = "";
  apiUrl: string = "http://localhost:8081";
  paymentOrderPath: string = this.apiUrl + "/search_payment/878787";
  paymentOrderDetailsPath: string = this.apiUrl + "/search_order/";

  getPaymentDataService(): Observable<any> {
    return this._httpClient.get(this.paymentOrderPath);
  }

  getPaymentOrderDetailsService(orderNo: string): Observable<any> {
    this.customUrl = this.paymentOrderDetailsPath + orderNo;

    return this._httpClient.get(this.customUrl);
  }
}
