import { TestBed } from '@angular/core/testing';

import { WorkspaceManagerService } from './workspace-manager.service';

describe('WorkspaceManagerService', () => {
  let service: WorkspaceManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkspaceManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
