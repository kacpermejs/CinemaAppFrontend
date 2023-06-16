/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CinemaSelectionService } from './cinema-selection.service';

describe('Service: CinemaSelection', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CinemaSelectionService]
    });
  });

  it('should ...', inject([CinemaSelectionService], (service: CinemaSelectionService) => {
    expect(service).toBeTruthy();
  }));
});
