import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigntestComponent } from './assigntest.component';

describe('AssigntestComponent', () => {
  let component: AssigntestComponent;
  let fixture: ComponentFixture<AssigntestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssigntestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssigntestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
