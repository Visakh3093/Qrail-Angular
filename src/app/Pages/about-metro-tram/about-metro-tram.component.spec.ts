import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMetroTramComponent } from './about-metro-tram.component';

describe('AboutMetroTramComponent', () => {
  let component: AboutMetroTramComponent;
  let fixture: ComponentFixture<AboutMetroTramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMetroTramComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutMetroTramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
