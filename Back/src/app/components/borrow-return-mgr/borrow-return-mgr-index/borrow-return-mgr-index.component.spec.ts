import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowReturnMgrIndexComponent } from './borrow-return-mgr-index.component';

describe('BorrowReturnMgrIndexComponent', () => {
  let component: BorrowReturnMgrIndexComponent;
  let fixture: ComponentFixture<BorrowReturnMgrIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrowReturnMgrIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowReturnMgrIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
