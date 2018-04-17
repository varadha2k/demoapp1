import { Component, OnInit } from '@angular/core';
import { LeadServiceService } from '../../services/lead-service.service';
import { Router } from '@angular/router';
import { ILead } from '../../domain/lead';

@Component({
  selector: 'app-add-lead',
  templateUrl: './add-lead.component.html',
  styleUrls: ['./add-lead.component.scss']
})
export class AddLeadComponent implements OnInit {

  _leadService : LeadServiceService;

  lead: ILead = {
    "leadName": "",
    "email": "",
    "phone": "",
    "location": "",
    "leadStatus": "",
    "leadOwner": "",
    "leadSource": "",
    "createdBy": "",
    "followupDate": "",
    "message": ""
  };

  constructor(leadService: LeadServiceService, private router:Router) {
    this._leadService = leadService;
   }

  ngOnInit() {
  }

  onSubmit()
  {
    this._leadService.addLead(this.lead);
    this.lead = {};
    this.router.navigate([`/home`]);

  }

}
