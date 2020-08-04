import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecuteProcessComponent } from './execute-process.component';

describe('ExecuteProcessComponent', () => {
  let component: ExecuteProcessComponent;
  let fixture: ComponentFixture<ExecuteProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecuteProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecuteProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
