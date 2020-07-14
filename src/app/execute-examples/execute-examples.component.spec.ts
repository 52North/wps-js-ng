import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecuteExamplesComponent } from './execute-examples.component';

describe('ExecuteExamplesComponent', () => {
  let component: ExecuteExamplesComponent;
  let fixture: ComponentFixture<ExecuteExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecuteExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecuteExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
