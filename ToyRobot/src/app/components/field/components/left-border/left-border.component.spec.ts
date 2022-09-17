import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftBorderComponent } from './left-border.component';

describe('LeftBorderComponent', () => {
  let component: LeftBorderComponent;
  let fixture: ComponentFixture<LeftBorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftBorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
