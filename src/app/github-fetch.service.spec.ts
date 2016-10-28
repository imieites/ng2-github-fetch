/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GithubFetchService } from './github-fetch.service';

describe('Service: GithubFetch', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubFetchService]
    });
  });

  it('should ...', inject([GithubFetchService], (service: GithubFetchService) => {
    expect(service).toBeTruthy();
  }));
});
