import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { PLAYERS, TABLE_HEADERS_STATISTICS } from 'src/app/constants/constants';
import { Columns, Player } from 'src/app/models/coaches.model';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
  ],
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  players!: Player[];
  headers!: string[];

  constructor() {}

  ngOnInit() {
    this.players = PLAYERS;
    this.headers = TABLE_HEADERS_STATISTICS;
  }

}
