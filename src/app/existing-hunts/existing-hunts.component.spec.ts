import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingHuntsComponent } from './existing-hunts.component';

describe('ExistingHuntsComponent', () => {
  let component: ExistingHuntsComponent;
  let fixture: ComponentFixture<ExistingHuntsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExistingHuntsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExistingHuntsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
