import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedtestComponent } from './assignedtest.component';

describe('AssignedtestComponent', () => {
  let component: AssignedtestComponent;
  let fixture: ComponentFixture<AssignedtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignedtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
