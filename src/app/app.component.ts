import { Component, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { WorkspaceManagerService } from './shared/services/workspace-manager.service';
import { Observable } from 'rxjs';
import { NavBarService } from './shared/nav-bar/nav-bar.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NavBarComponent,
    AsyncPipe
  ],
  providers: [
    WorkspaceManagerService,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  isShowToolBar$!: Observable<boolean>;

  constructor(
    private workspaceManager: WorkspaceManagerService,
    private navBarService: NavBarService,
  ) {}

  ngOnInit(): void {
    this.workspaceManager.initDirectories();
    this.isShowToolBar$ = this.navBarService.getShowToolBar$();
  }
}
