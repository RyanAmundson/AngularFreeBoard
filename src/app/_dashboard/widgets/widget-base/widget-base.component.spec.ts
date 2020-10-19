import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetBaseComponent } from './widget-base.component';

describe('WidgetBaseComponent', () => {
  let component: WidgetBaseComponent;
  let fixture: ComponentFixture<WidgetBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
