import { Component, OnInit } from '@angular/core';
import { ILead } from '../../domain/lead';
import { ActivatedRoute, Router } from '@angular/router';
import { LeadServiceService } from '../../services/lead-service.service';

@Component({
  selector: 'app-lead-detail',
  templateUrl: './lead-detail.component.html',
  styleUrls: ['./lead-detail.component.scss']
})
export class LeadDetailComponent implements OnInit {

  pageTitle: String = "Detail of Lead";
  lead: ILead;
  private _leadService: LeadServiceService;
  errorMessage: string;

  constructor(private _route: ActivatedRoute, private _router: Router, leadService: LeadServiceService) { 
    this._leadService = leadService;
  }

  ngOnInit() {

   let id = this._route.snapshot.paramMap.get('id');  
   this._leadService.getLeadById(id)
    .subscribe(lead => {
      this.lead = lead;
      this.pageTitle += " -  " + this.lead.leadName;
    }, error => this.errorMessage = error);
  }

  deleteLead(lead: ILead)
  {
    console.log("inside delete lead " + lead.id);    
    this._leadService.deleteLead(lead);
  }


  editLead(event, lead)
  {
    console.log("In Edit Lead");
  }

}
