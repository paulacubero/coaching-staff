import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-medical-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './medical-home.component.html',
  styleUrls: ['./medical-home.component.scss']
})
export class MedicalHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
