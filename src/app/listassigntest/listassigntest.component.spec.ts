import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListassigntestComponent } from './listassigntest.component';

describe('ListassigntestComponent', () => {
  let component: ListassigntestComponent;
  let fixture: ComponentFixture<ListassigntestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListassigntestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListassigntestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
