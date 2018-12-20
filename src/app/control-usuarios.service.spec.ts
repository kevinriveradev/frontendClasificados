import { TestBed } from '@angular/core/testing';

import { ControlUsuariosService } from './control-usuarios.service';

describe('ControlUsuariosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ControlUsuariosService = TestBed.get(ControlUsuariosService);
    expect(service).toBeTruthy();
  });
});
