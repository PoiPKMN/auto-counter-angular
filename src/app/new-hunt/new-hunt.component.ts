import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FlexContainerComponent } from '../shared/flex-container/flex-container.component';

@Component({
  selector: 'new-hunt',
  standalone: true,
  imports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    FlexContainerComponent,
  ],
  templateUrl: './new-hunt.component.html',
  styleUrl: './new-hunt.component.scss'
})
export class NewHuntComponent {
  huntName: string = '';

  triggers: any[] = [];

  onAddNewTrigger(): void {
    (window as any).mainApi.createBrowserWindow('new-trigger');
  }

  onFinish(): void {

  }
}
