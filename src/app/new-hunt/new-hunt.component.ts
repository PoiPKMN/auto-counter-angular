import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'new-hunt',
  standalone: true,
  imports: [
    MatButtonModule,
  ],
  templateUrl: './new-hunt.component.html',
  styleUrl: './new-hunt.component.scss'
})
export class NewHuntComponent {
  onNewHunt(): void {
    
  }
}
