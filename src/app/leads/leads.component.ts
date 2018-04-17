import { Component, OnInit } from '@angular/core';
import {LeadServiceService} from '../services/lead-service.service';
import { ILead } from '../domain/lead';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss']
})
export class LeadsComponent implements OnInit {

  leads: ILead[] = [];
  pageTitle: string = "Leads";
  private _leadService;
  errorMessage: string = "";
  
  
  constructor(leadService: LeadServiceService) { 
    this._leadService = leadService;
  }

  ngOnInit() {

    console.log("In OnInit");
    
    this._leadService.getLeads()
            .subscribe(leads => {
              this.leads = leads;
            }, error => this.errorMessage = error);
    
  }

}
