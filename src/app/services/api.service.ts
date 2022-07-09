import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl: string = "http://localhost:3000/productList/";

  constructor(private _httpClient: HttpClient) { }

  postProduct(data: any) {
    return this._httpClient.post<any>(this.apiUrl, data);
  }

  getProduct() {
    this._httpClient.get(this.apiUrl);
  }
}
