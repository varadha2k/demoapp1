import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
// import 'rxjs/add/operator/throw';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/do';


import { IProduct } from './product';

@Injectable()
export class ProductService {

  private _productUrl = 'assets/products.json';

  constructor(private _http: HttpClient) { }

  getProducts() : Observable<IProduct[]>{

    return this._http.get<IProduct[]>(this._productUrl);
            // .do(data => console.log('Response: ' + JSON.stringify(data)))
            // .catch(this.handleError);           

  }

  // private handleError(err: HttpErrorResponse) {
  //   console.log(err.message);
  //   return Observable.throw(err.message);

  // }

}
