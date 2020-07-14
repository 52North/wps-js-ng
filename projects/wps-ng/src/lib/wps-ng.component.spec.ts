import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WpsNgComponent } from './wps-ng.component';

describe('WpsNgComponent', () => {
  let component: WpsNgComponent;
  let fixture: ComponentFixture<WpsNgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WpsNgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WpsNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
