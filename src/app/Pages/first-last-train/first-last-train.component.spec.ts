import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstLastTrainComponent } from './first-last-train.component';

describe('FirstLastTrainComponent', () => {
  let component: FirstLastTrainComponent;
  let fixture: ComponentFixture<FirstLastTrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstLastTrainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstLastTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
