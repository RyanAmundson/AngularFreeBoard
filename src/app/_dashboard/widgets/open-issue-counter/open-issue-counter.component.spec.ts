import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenIssueCounterComponent } from './open-issue-counter.component';

describe('OpenIssueCounterComponent', () => {
  let component: OpenIssueCounterComponent;
  let fixture: ComponentFixture<OpenIssueCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenIssueCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenIssueCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
