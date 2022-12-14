import { TestBed } from '@angular/core/testing';

import { ServiceGroupsProviderService } from './service-groups-provider.service';

describe('ServiceGroupsProviderService', () => {
  let service: ServiceGroupsProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceGroupsProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
