import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerCardComponent } from '../../shared/player-card/player-card.component';
import { Observable, tap } from 'rxjs';
import { Player } from 'src/app/models/coaches.model';
import { PlayersService } from 'src/app/services/players.service';
import { PlayerNameFilterPipe } from 'src/app/pipes/player-name-filter.pipe';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { AuthService } from 'src/app/services/auth.service';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-medical-home',
  standalone: true,
  imports: [
    CommonModule,
    PlayerCardComponent,
    PlayerNameFilterPipe,
    FormsModule,
    InputTextModule,
    AvatarModule,
  ],
  templateUrl: './medical-home.component.html',
  styleUrls: ['./medical-home.component.scss'],
})
export class MedicalHomeComponent implements OnInit {
  searchTerm: string = '';
  userInitials: string = localStorage.getItem('name')?.charAt(0).toUpperCase() || 'U';
  players$: Observable<Player[]> = this._playersService.getPlayers();
  constructor(
    private _playersService: PlayersService,
    private _authService: AuthService
  ) {}

  ngOnInit(): void {}

  refreshAvailability(value: boolean): void {
    this.players$ = this._playersService.getPlayers();
  }

  userLogOut(): void {
    this._authService.logout();
  }
}
