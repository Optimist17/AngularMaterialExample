import { TestBed, inject } from '@angular/core/testing';

import { WebClientService } from './web-client.service';

describe('WebClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebClientService]
    });
  });

  it('should be created', inject([WebClientService], (service: WebClientService) => {
    expect(service).toBeTruthy();
  }));
});
