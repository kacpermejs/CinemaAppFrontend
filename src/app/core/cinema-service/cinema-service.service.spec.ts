/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CinemaServiceService } from './cinema-service.service';

describe('Service: CinemaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CinemaServiceService]
    });
  });

  it('should ...', inject([CinemaServiceService], (service: CinemaServiceService) => {
    expect(service).toBeTruthy();
  }));
});
