import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetroLinkComponent } from './metro-link.component';

describe('MetroLinkComponent', () => {
  let component: MetroLinkComponent;
  let fixture: ComponentFixture<MetroLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetroLinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MetroLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
