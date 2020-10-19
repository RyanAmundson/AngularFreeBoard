import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgnosticComponent } from './agnostic.component';

describe('AgnosticComponent', () => {
  let component: AgnosticComponent;
  let fixture: ComponentFixture<AgnosticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgnosticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgnosticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
