import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerBorderComponent } from './lower-border.component';

describe('LowerBorderComponent', () => {
  let component: LowerBorderComponent;
  let fixture: ComponentFixture<LowerBorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LowerBorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LowerBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
