import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexContainerComponent } from './flex-container.component';

describe('FlexContainerComponent', () => {
  let component: FlexContainerComponent;
  let fixture: ComponentFixture<FlexContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlexContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlexContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
