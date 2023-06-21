import { TestBed } from '@angular/core/testing';

import { PlayerNameGeneratorService } from './player-name-generator.service';

describe('PlayerNameGeneratorService', () => {
  let service: PlayerNameGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerNameGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
