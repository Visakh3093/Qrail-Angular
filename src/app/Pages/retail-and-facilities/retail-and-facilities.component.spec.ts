import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailAndFacilitiesComponent } from './retail-and-facilities.component';

describe('RetailAndFacilitiesComponent', () => {
  let component: RetailAndFacilitiesComponent;
  let fixture: ComponentFixture<RetailAndFacilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetailAndFacilitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RetailAndFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
