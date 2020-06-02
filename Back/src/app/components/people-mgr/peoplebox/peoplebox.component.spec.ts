import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleboxComponent } from './peoplebox.component';

describe('PeopleboxComponent', () => {
  let component: PeopleboxComponent;
  let fixture: ComponentFixture<PeopleboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
