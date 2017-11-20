/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArenaSocketService } from './arena-socket.service';

describe('ArenaSocketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArenaSocketService]
    });
  });

  it('should ...', inject([ArenaSocketService], (service: ArenaSocketService) => {
    expect(service).toBeTruthy();
  }));
});
