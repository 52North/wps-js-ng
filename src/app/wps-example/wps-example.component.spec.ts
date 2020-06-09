import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WpsExampleComponent } from './wps-example.component';

describe('WpsExampleComponent', () => {
  let component: WpsExampleComponent;
  let fixture: ComponentFixture<WpsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WpsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WpsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
