import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTriggerComponent } from './new-trigger.component';

describe('NewTriggerComponent', () => {
  let component: NewTriggerComponent;
  let fixture: ComponentFixture<NewTriggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewTriggerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
