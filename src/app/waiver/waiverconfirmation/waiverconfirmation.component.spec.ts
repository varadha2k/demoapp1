import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaiverconfirmationComponent } from './waiverconfirmation.component';

describe('WaiverconfirmationComponent', () => {
  let component: WaiverconfirmationComponent;
  let fixture: ComponentFixture<WaiverconfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaiverconfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaiverconfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
