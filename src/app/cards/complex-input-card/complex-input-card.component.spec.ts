import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexInputCardComponent } from './complex-input-card.component';

describe('ComplexInputCardComponent', () => {
  let component: ComplexInputCardComponent;
  let fixture: ComponentFixture<ComplexInputCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexInputCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexInputCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
