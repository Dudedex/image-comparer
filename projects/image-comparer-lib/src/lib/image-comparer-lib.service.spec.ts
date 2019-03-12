import { TestBed } from '@angular/core/testing';

import { ImageComparerLibService } from './image-comparer-lib.service';

describe('ImageComparerLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageComparerLibService = TestBed.get(ImageComparerLibService);
    expect(service).toBeTruthy();
  });
});
