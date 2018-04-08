import { Component } from '@angular/core';
import { ProductService } from './product-list/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ProductService]
})
export class AppComponent {
  title = 'app';
}
