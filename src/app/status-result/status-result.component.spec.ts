import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusResultComponent } from './status-result.component';

describe('StatusResultComponent', () => {
  let component: StatusResultComponent;
  let fixture: ComponentFixture<StatusResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
