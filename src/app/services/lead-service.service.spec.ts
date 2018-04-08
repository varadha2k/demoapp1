import { TestBed, inject } from '@angular/core/testing';

import { LeadServiceService } from './lead-service.service';

describe('LeadServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeadServiceService]
    });
  });

  it('should be created', inject([LeadServiceService], (service: LeadServiceService) => {
    expect(service).toBeTruthy();
  }));
});
