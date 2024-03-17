import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarsBreakComponent } from './bars-break.component';

describe('BarsBreakComponent', () => {
  let component: BarsBreakComponent;
  let fixture: ComponentFixture<BarsBreakComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarsBreakComponent]
    });
    fixture = TestBed.createComponent(BarsBreakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
