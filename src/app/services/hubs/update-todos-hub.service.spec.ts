import { TestBed, inject } from '@angular/core/testing';

import { UpdateTodosHubService } from './update-todos-hub.service';

describe('UpdateTodosHubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateTodosHubService]
    });
  });

  it('should be created', inject([UpdateTodosHubService], (service: UpdateTodosHubService) => {
    expect(service).toBeTruthy();
  }));
});
