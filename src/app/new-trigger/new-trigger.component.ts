import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../shared/nav-bar/nav-bar.service';

@Component({
  selector: 'new-trigger',
  standalone: true,
  imports: [],
  providers: [],
  templateUrl: './new-trigger.component.html',
  styleUrl: './new-trigger.component.scss'
})
export class NewTriggerComponent implements OnInit {
  constructor(private navBarService: NavBarService) {}

  ngOnInit(): void {
    this.navBarService.setShowToolBar(false);
  }
}
