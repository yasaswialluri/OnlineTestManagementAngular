import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdiagnosticcenterComponent } from './viewdiagnosticcenter.component';

describe('ViewdiagnosticcenterComponent', () => {
  let component: ViewdiagnosticcenterComponent;
  let fixture: ComponentFixture<ViewdiagnosticcenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdiagnosticcenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdiagnosticcenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
