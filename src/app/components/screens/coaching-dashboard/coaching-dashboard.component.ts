import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-coaching-dashboard',
  templateUrl: './coaching-dashboard.component.html',
  styleUrls: ['./coaching-dashboard.component.scss'],
})
export class CoachingDashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
