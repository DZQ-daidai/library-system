import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleMgrIndexComponent } from './people-mgr-index.component';

describe('PeopleMgrIndexComponent', () => {
  let component: PeopleMgrIndexComponent;
  let fixture: ComponentFixture<PeopleMgrIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleMgrIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleMgrIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
