import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDeletePlayerComponent } from './button-delete-player.component';

describe('ButtonDeletePlayerComponent', () => {
  let component: ButtonDeletePlayerComponent;
  let fixture: ComponentFixture<ButtonDeletePlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ButtonDeletePlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonDeletePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
