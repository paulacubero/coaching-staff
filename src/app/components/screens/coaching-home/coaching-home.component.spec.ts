import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachingHomeComponent } from './coaching-home.component';

describe('CoachingHomeComponent', () => {
  let component: CoachingHomeComponent;
  let fixture: ComponentFixture<CoachingHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachingHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
