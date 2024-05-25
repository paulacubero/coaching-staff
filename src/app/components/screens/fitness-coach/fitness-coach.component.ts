import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fitness-coach',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fitness-coach.component.html',
  styleUrls: ['./fitness-coach.component.scss']
})
export class FitnessCoachComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
