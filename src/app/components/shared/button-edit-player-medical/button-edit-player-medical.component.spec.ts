import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonEditPlayerMedicalComponent } from './button-edit-player-medical.component';

describe('ButtonEditPlayerMedicalComponent', () => {
  let component: ButtonEditPlayerMedicalComponent;
  let fixture: ComponentFixture<ButtonEditPlayerMedicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ButtonEditPlayerMedicalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonEditPlayerMedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
