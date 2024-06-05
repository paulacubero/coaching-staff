import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerCardComponent } from '../../shared/player-card/player-card.component';
import { Observable, tap } from 'rxjs';
import { Player } from 'src/app/models/coaches.model';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-medical-home',
  standalone: true,
  imports: [CommonModule, PlayerCardComponent],
  templateUrl: './medical-home.component.html',
  styleUrls: ['./medical-home.component.scss'],
})
export class MedicalHomeComponent implements OnInit {
  players$: Observable<Player[]> = this._playersService.getPlayers()
  constructor(private _playersService: PlayersService) {}

  ngOnInit(): void {}

  refreshAvailability(value: boolean): void {
    this.players$ = this._playersService.getPlayers();
  }
}
