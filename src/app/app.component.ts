import { Component } from '@angular/core';
import { ProductService } from './product-list/product.service';
import { LeadServiceService } from './services/lead-service.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ProductService, LeadServiceService]
})
export class AppComponent {
  title = 'app';
  items: Observable<any[]>;


  constructor(db: AngularFirestore)
  {
    this.items = db.collection('names').valueChanges();
  }
}
