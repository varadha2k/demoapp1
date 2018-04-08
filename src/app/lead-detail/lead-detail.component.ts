import { Component, OnInit } from '@angular/core';
import { ILead } from '../leads/lead';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lead-detail',
  templateUrl: './lead-detail.component.html',
  styleUrls: ['./lead-detail.component.scss']
})
export class LeadDetailComponent implements OnInit {

  pageTitle: String = "Lead Detail";
  lead: ILead;

  constructor(private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {

    let id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += " -  " + id;
    this.lead = {
      "leadId": 1,
      "leadName": "John Smart",
      "email": "john@abc.com",
      "phone": "512 123 4567",
      "location": "Austin",
      "leadStatus": "New Lead",
      "leadOwner": "ABC",
      "leadSource": "Adworks",
      "createdBy": "Automation",
      "createdTime": "Apr 6, 2018 03:10 PM",
      "updatedTime": "Apr 6, 2018 03:10 PM",
      "followupDate": "Apr 8 2018",
      "message": "This is Lead 1"
    };  
  }

}
