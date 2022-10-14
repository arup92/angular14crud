import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentApiService {

  constructor(private _httpClient: HttpClient) { }

  apiUrl: string = "http://localhost:8081/search_patient/878787";
  //apiUrl: string = "https://mocki.io/v1/b1e64b7a-438e-45b4-8cb1-12db542499fb ";

  getPaymentData(): Observable<any> {
    return this._httpClient.get(this.apiUrl);
  }
}
