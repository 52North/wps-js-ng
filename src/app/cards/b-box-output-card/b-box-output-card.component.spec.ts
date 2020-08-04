import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBoxOutputCardComponent } from './b-box-output-card.component';

describe('BBoxOutputCardComponent', () => {
  let component: BBoxOutputCardComponent;
  let fixture: ComponentFixture<BBoxOutputCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBoxOutputCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBoxOutputCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
