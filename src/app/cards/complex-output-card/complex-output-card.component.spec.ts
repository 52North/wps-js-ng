import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexOutputCardComponent } from './complex-output-card.component';

describe('ComplexOutputCardComponent', () => {
  let component: ComplexOutputCardComponent;
  let fixture: ComponentFixture<ComplexOutputCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexOutputCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexOutputCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
