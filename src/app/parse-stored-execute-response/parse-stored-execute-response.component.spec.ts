import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParseStoredExecuteResponseComponent } from './parse-stored-execute-response.component';

describe('ParseStoredExecuteResponseComponent', () => {
  let component: ParseStoredExecuteResponseComponent;
  let fixture: ComponentFixture<ParseStoredExecuteResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParseStoredExecuteResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParseStoredExecuteResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
