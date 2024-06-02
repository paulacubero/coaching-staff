import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.scss']
})
export class NewPlayerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
