import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {
  showToolBar = new BehaviorSubject(true);

  getShowToolBar$(): Observable<boolean> {
    return this.showToolBar.asObservable();
  }

  setShowToolBar(isShow: boolean): void {
    this.showToolBar.next(isShow);
  }
}
