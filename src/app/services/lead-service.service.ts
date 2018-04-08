import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';

import { ILead } from '../leads/lead';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class LeadServiceService {
  private _leadsUrl = 'assets/leads.json';
  leadsCollection: AngularFirestoreCollection<ILead>;
  leads: Observable<ILead[]>;

  constructor(private _http: HttpClient, public afs: AngularFirestore) {

    this.leadsCollection = this.afs.collection('leads');


    this.leads = this.leadsCollection.snapshotChanges().map(
      changes => {
        return changes.map(a =>{
          const data = a.payload.doc.data() as ILead;
          data.id = a.payload.doc.id;
          //console.log("Id is" + data.id);
          return data;
        }
        )
      }
    );
   }


  getLeads() : Observable<ILead[]>{

    console.log("In getLeads");
    return this.leads;    
    //return this._http.get<ILead[]>(this._leadsUrl);
  }

  addLead(lead: ILead){
    this.leadsCollection.add(lead);
  }

}
