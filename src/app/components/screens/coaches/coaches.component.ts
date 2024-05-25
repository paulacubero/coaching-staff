import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-coaches',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.scss']
})
export class CoachesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
