import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignLightTwoComponent } from './design-light-two.component';

describe('DesignLightTwoComponent', () => {
  let component: DesignLightTwoComponent;
  let fixture: ComponentFixture<DesignLightTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignLightTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignLightTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
