import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBoxInputCardComponent } from './b-box-input-card.component';

describe('BBoxInputCardComponent', () => {
  let component: BBoxInputCardComponent;
  let fixture: ComponentFixture<BBoxInputCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBoxInputCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBoxInputCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
