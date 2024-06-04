import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Player } from 'src/app/models/coaches.model';
import { DEFAULT_AVATAR } from 'src/app/constants/constants';

@Component({
  selector: 'app-player-card',
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {
  @Input() player!: Player;
  constructor() { }

  ngOnInit(): void {
  }

  getImage(player: Player) {
    return player.img ? player.img : DEFAULT_AVATAR;
  }
}
