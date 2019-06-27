import { TestBed } from '@angular/core/testing';

import { ServiceGroupsProviderService } from './service-groups-provider.service';

describe('ServiceGroupsProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceGroupsProviderService = TestBed.get(ServiceGroupsProviderService);
    expect(service).toBeTruthy();
  });
});
