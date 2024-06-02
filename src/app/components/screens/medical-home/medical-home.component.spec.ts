import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalHomeComponent } from './medical-home.component';

describe('MedicalHomeComponent', () => {
  let component: MedicalHomeComponent;
  let fixture: ComponentFixture<MedicalHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MedicalHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
