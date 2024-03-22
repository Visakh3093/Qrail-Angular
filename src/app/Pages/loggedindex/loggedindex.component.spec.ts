import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedindexComponent } from './loggedindex.component';

describe('LoggedindexComponent', () => {
  let component: LoggedindexComponent;
  let fixture: ComponentFixture<LoggedindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoggedindexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoggedindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
