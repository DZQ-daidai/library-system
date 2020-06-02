import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookboxComponent } from './bookbox.component';

describe('BookboxComponent', () => {
  let component: BookboxComponent;
  let fixture: ComponentFixture<BookboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
