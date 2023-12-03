import { Component } from '@angular/core';
import { NewHuntComponent } from '../new-hunt/new-hunt.component';
import { ExistingHuntsComponent } from '../existing-hunts/existing-hunts.component';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'main-menu',
  standalone: true,
  imports: [
    NewHuntComponent,
    ExistingHuntsComponent,
    MatButtonModule,
  ],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss'
})
export class MainMenuComponent {
  constructor(private router: Router) {}

  onNewHunt(): void {
    this.router.navigate(['/new-hunt'])
  }
}
