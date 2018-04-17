import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaiverRegisteredUserComponent } from './waiver-registered-user.component';

describe('WaiverRegisteredUserComponent', () => {
  let component: WaiverRegisteredUserComponent;
  let fixture: ComponentFixture<WaiverRegisteredUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaiverRegisteredUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaiverRegisteredUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
