import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { IProduct } from './product';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(private _route: ActivatedRoute, private _router: Router) { 
  }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += " -  " + id;
    
    this.product = {
      "productId": id,
      "productName":  "product name",
      "productCode":  "PROD01",
      "releaseDate": "March 19, 2016",
      "description":  "This is the description",
      "price": 20,
      "starRating":  3.2,
      "imageUrl": "http://placehold.it/120x120&text=image1"

    };  


  }

  onBack(): void{
    this._router.navigate(['/products']);
  }

}
