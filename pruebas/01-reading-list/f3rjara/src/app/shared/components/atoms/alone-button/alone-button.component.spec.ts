import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AloneButtonComponent } from './alone-button.component';
import { CommonModule } from '@angular/common';

describe('AloneButtonComponent', () => {
  let component: AloneButtonComponent;
  let fixture: ComponentFixture<AloneButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AloneButtonComponent, CommonModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AloneButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
