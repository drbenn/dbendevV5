import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderOneComponent } from './render-one.component';

describe('RenderOneComponent', () => {
  let component: RenderOneComponent;
  let fixture: ComponentFixture<RenderOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenderOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
