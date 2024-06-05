import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachingDashboardComponent } from './coaching-dashboard.component';

describe('CoachingDashboardComponent', () => {
  let component: CoachingDashboardComponent;
  let fixture: ComponentFixture<CoachingDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachingDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachingDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
