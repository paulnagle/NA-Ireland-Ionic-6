import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatetimePage } from './datetime.page';

describe('DatetimePage', () => {
  let component: DatetimePage;
  let fixture: ComponentFixture<DatetimePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DatetimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
