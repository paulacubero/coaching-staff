import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonEditPlayerComponent } from './button-edit-player.component';

describe('ButtonEditPlayerComponent', () => {
  let component: ButtonEditPlayerComponent;
  let fixture: ComponentFixture<ButtonEditPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ButtonEditPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonEditPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
