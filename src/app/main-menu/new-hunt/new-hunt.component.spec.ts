import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHuntComponent } from './new-hunt.component';

describe('NewHuntComponent', () => {
  let component: NewHuntComponent;
  let fixture: ComponentFixture<NewHuntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewHuntComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewHuntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
