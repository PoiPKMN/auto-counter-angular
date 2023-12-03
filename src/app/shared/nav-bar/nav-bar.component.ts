import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Location } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'nav-bar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    FontAwesomeModule,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  backIcon = faArrowLeft;

  constructor(public location: Location) {}

  onBack(): void {
    this.location.back();
    this.location.isCurrentPathEqualTo('');
  }
}
