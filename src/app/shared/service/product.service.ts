import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iproduct } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  BASE_URL: string = `${environment.BaseUrl}`;
  PRODUCT_URL: string = `${this.BASE_URL}/products`;
  constructor(private _http: HttpClient) {}

  fetchAllProduct(): Observable<Array<Iproduct>> {
    return this._http.get<Array<Iproduct>>(this.PRODUCT_URL);
  }

  getSingleproduct(Id:string):Observable<Iproduct>{
    return this._http.get<Iproduct>(`${this.PRODUCT_URL}/${Id}`)!
  }
}
