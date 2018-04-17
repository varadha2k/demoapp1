import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { ILead } from '../domain/lead';

@Injectable()
export class LeadServiceService {
  private _leadsUrl = 'assets/leads.json';
  leadsCollection: AngularFirestoreCollection<ILead>;
  doc: AngularFirestoreDocument<ILead>;
  leads: Observable<ILead[]>;
  lead: ILead;

  constructor(private _http: HttpClient, public afs: AngularFirestore) {
    this.leadsCollection = this.afs.collection('leads', ref => ref.orderBy('leadName', 'asc'));
    this.leads = this.leadsCollection.snapshotChanges().map(
      changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as ILead;
          data.id = a.payload.doc.id;
          return data;
        }
        )
      }
    );
  }

  getLeadById(id: string): Observable<ILead> {
    const document: AngularFirestoreDocument<ILead> = this.afs.doc('leads/' + id);
    const document$: Observable<ILead> = document.valueChanges();
    return document$;

  }

  getLeads(): Observable<ILead[]> {
    console.log("In getLeads");
    return this.leads;
  }

  addLead(lead: ILead) {
    this.leadsCollection.add(lead);
  }

  deleteLead(lead: ILead) {
    console.log("delete lead id " + lead.id);
    this.doc = this.afs.doc(`leads/${lead.id}`);
    this.doc.delete();
  }

}