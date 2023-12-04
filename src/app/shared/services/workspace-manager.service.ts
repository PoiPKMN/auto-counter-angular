import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WorkspaceManagerService {
  mainApi: any;

  constructor() {
    this.mainApi = (window as any).mainApi;
  }

  async initDirectories(): Promise<void> {
    this.mainApi.getFolders().then((folders: string[]) => {
      if (!folders.includes('counters')) {
        this.mainApi.addWorkspaceFolder('counters');
      }

      if (!folders.includes('rates')) {
        this.mainApi.addWorkspaceFolder('rates');
      }

      if (!folders.includes('logs')) {
        this.mainApi.addWorkspaceFolder('logs');
      }
    });
  }
}
