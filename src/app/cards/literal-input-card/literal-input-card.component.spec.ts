import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteralInputCardComponent } from './literal-input-card.component';

describe('LiteralInputCardComponent', () => {
  let component: LiteralInputCardComponent;
  let fixture: ComponentFixture<LiteralInputCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiteralInputCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiteralInputCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
