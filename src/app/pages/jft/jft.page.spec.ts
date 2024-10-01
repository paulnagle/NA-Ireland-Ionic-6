import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JftPage } from './jft.page';

describe('JftPage', () => {
  let component: JftPage;
  let fixture: ComponentFixture<JftPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JftPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
