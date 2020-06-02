import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MgrComponent } from './mgr.component';

describe('MgrComponent', () => {
  let component: MgrComponent;
  let fixture: ComponentFixture<MgrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MgrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
