import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonEditCoachFormComponent } from './button-edit-coach-form.component';

describe('ButtonEditCoachFormComponent', () => {
  let component: ButtonEditCoachFormComponent;
  let fixture: ComponentFixture<ButtonEditCoachFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ButtonEditCoachFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonEditCoachFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
