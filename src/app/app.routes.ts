import { Routes } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { NewHuntComponent } from './new-hunt/new-hunt.component';
import { NewTriggerComponent } from './new-trigger/new-trigger.component';

export const routes: Routes = [
  {
    path: '',
    component: MainMenuComponent,
  },
  {
    path: 'new-hunt',
    component: NewHuntComponent,
  },
  {
    path: 'new-trigger',
    component: NewTriggerComponent,
  },
];
