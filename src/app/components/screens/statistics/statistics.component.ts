import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import {
  DEFAULT_AVATAR,
  TABLE_HEADERS_STATISTICS,
} from 'src/app/constants/constants';
import { Player } from 'src/app/models/coaches.model';
import { ButtonEditPlayerComponent } from '../../shared/button-edit-player/button-edit-player.component';
import { ButtonDeletePlayerComponent } from '../../shared/button-delete-player/button-delete-player.component';
import { PlayersService } from 'src/app/services/players.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    ButtonEditPlayerComponent,
    ButtonDeletePlayerComponent,
  ],
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  players$: Observable<Player[]> = this._playersService.getPlayers();
  headers!: string[];
  visible: boolean = false;

  constructor(private _playersService: PlayersService) {}

  ngOnInit() {
    this.headers = TABLE_HEADERS_STATISTICS;
  }

  getImage(player: Player) {
    return player.img ? player.img : DEFAULT_AVATAR;
  }
}
