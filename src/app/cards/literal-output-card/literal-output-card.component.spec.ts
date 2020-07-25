import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteralOutputCardComponent } from './literal-output-card.component';

describe('LiteralOutputCardComponent', () => {
  let component: LiteralOutputCardComponent;
  let fixture: ComponentFixture<LiteralOutputCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiteralOutputCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiteralOutputCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
