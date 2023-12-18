import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderThreeComponent } from './render-three.component';

describe('RenderThreeComponent', () => {
  let component: RenderThreeComponent;
  let fixture: ComponentFixture<RenderThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenderThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
