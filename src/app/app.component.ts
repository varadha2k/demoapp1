import { Component } from '@angular/core';
import { LeadServiceService } from './services/lead-service.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ LeadServiceService]
})
export class AppComponent {
  title = 'app';
  items: Observable<any[]>;


  constructor(db: AngularFirestore, public authService: AuthService)
  {
    this.items = db.collection('names').valueChanges();
  }
}
