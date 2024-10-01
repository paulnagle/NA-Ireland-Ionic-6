import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapSearchPage } from './map-search.page';

describe('MapSearchPage', () => {
  let component: MapSearchPage;
  let fixture: ComponentFixture<MapSearchPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MapSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
