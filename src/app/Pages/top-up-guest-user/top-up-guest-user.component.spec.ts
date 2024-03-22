import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopUpGuestUserComponent } from './top-up-guest-user.component';

describe('TopUpGuestUserComponent', () => {
  let component: TopUpGuestUserComponent;
  let fixture: ComponentFixture<TopUpGuestUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopUpGuestUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopUpGuestUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
