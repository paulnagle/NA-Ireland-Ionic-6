import { TestBed } from '@angular/core/testing';

import { MeetingListProviderService } from './meeting-list-provider.service';

describe('MeetingListProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MeetingListProviderService = TestBed.get(MeetingListProviderService);
    expect(service).toBeTruthy();
  });
});
