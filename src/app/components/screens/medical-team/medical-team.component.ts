import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-medical-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './medical-team.component.html',
  styleUrls: ['./medical-team.component.scss']
})
export class MedicalTeamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
