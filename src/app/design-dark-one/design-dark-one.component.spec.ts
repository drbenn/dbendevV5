import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignDarkOneComponent } from './design-dark-one.component';

describe('DesignDarkOneComponent', () => {
  let component: DesignDarkOneComponent;
  let fixture: ComponentFixture<DesignDarkOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignDarkOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignDarkOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
