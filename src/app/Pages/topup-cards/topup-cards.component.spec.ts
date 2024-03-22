import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopupCardsComponent } from './topup-cards.component';

describe('TopupCardsComponent', () => {
  let component: TopupCardsComponent;
  let fixture: ComponentFixture<TopupCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopupCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopupCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
