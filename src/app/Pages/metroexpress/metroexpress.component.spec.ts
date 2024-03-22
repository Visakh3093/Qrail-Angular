import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetroexpressComponent } from './metroexpress.component';

describe('MetroexpressComponent', () => {
  let component: MetroexpressComponent;
  let fixture: ComponentFixture<MetroexpressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetroexpressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MetroexpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
