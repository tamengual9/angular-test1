import { TestBed } from '@angular/core/testing';

import { CiclistaService } from './ciclista.service';

describe('CiclistaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CiclistaService = TestBed.get(CiclistaService);
    expect(service).toBeTruthy();
  });
});
