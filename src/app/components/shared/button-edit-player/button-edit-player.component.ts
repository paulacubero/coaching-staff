import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { KnobModule } from 'primeng/knob';
import { ToastModule } from 'primeng/toast';
import { DEFAULT_AVATAR } from 'src/app/constants/constants';
import { Player } from 'src/app/models/coaches.model';
import { MessageService } from 'primeng/api';
import { PlayersService } from 'src/app/services/players.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-button-edit-player',
  standalone: true,
  imports: [
    CommonModule,
    DialogModule,
    KnobModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
    InputNumberModule,
    ToastModule,
  ],
  templateUrl: './button-edit-player.component.html',
  styleUrls: ['./button-edit-player.component.scss'],
  providers: [MessageService],
})
export class ButtonEditPlayerComponent implements OnInit {
  @Input() player?: Player;
  visible = false;
  playerStatsForm!: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _messageService: MessageService,
    private _playersService: PlayersService
  ) {}

  ngOnInit(): void {
    if (this.player) {
      this.playerStatsForm = this._fb.group({
        id: [this.player._id],
        playedMinutes: [0],
        goals: [0],
        passes: [0],
      });
    }
  }

  getImage(player: Player) {
    return player.img ? player.img : DEFAULT_AVATAR;
  }

  onSubmit(): void {
    const player = this.playerStatsForm.value;
    this._playersService
      .editPlayer(player)
      .pipe(
        tap(() => {
          this.visible = false;
          this._messageService.add({
            severity: 'success',
            summary: 'Confirmado',
            detail: `Se han actualizado los datos de ${this.player?.name} ${this.player?.surname}`,
          });
        })
      )
      .subscribe();
  }

  openDialogForm() {
    this.visible = true;
  }

  closeDialogForm() {
    this.visible = false;
  }
}
