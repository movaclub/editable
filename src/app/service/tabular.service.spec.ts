import { TestBed } from '@angular/core/testing';

import { TabularService } from './tabular.service';

describe('TabularService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TabularService = TestBed.get(TabularService);
    expect(service).toBeTruthy();
  });
});
