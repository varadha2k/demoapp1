import * as firebase from 'firebase/app';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import { FirebaseAuth } from '@firebase/auth-types';

@Injectable()
export class AuthService {

  user$: Observable<firebase.User>;


  constructor(private router: Router, private afa: AngularFireAuth) { 
    this.user$ = this.afa.authState;
  }

  login(){
    this.afa.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(_ => this.router.navigate([`/leads`]))
    .catch(error => console.log(error));
  }

  logout(){
    this.afa.auth.signOut();
    this.router.navigate([`/`]);
  }

}
