import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-coaching-home',
  standalone: true,
  imports: [ButtonModule, RouterModule],
  templateUrl: './coaching-home.component.html',
  styleUrls: ['./coaching-home.component.scss']
})
export class CoachingHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
