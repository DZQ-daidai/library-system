import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookMgrIndexComponent } from './book-mgr-index.component';

describe('BookMgrIndexComponent', () => {
  let component: BookMgrIndexComponent;
  let fixture: ComponentFixture<BookMgrIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookMgrIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookMgrIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
