import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicensedRetailersComponent } from './licensed-retailers.component';

describe('LicensedRetailersComponent', () => {
  let component: LicensedRetailersComponent;
  let fixture: ComponentFixture<LicensedRetailersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicensedRetailersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LicensedRetailersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
