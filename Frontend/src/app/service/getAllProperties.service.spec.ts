/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetAllPropertiesService } from './getAllProperties.service';

describe('Service: GetAllProperties', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAllPropertiesService]
    });
  });

  it('should ...', inject([GetAllPropertiesService], (service: GetAllPropertiesService) => {
    expect(service).toBeTruthy();
  }));
});
