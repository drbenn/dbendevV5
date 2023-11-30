import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderTwoComponent } from './render-two.component';

describe('RenderTwoComponent', () => {
  let component: RenderTwoComponent;
  let fixture: ComponentFixture<RenderTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenderTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
