import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl: string = "http://localhost:3000/productList/";

  constructor(private _httpClient: HttpClient) { }

  postProduct(data: any): Observable<any> {
    return this._httpClient.post<any>(this.apiUrl, data);
  }

  getProduct(): Observable<any> {
    return this._httpClient.get(this.apiUrl);
  }
}
