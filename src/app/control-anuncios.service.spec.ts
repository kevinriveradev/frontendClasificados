import { TestBed } from '@angular/core/testing';

import { ControlAnunciosService } from './control-anuncios.service';

describe('ControlAnunciosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ControlAnunciosService = TestBed.get(ControlAnunciosService);
    expect(service).toBeTruthy();
  });
});
