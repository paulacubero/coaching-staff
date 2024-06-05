import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Player } from 'src/app/models/coaches.model';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PlayersService } from 'src/app/services/players.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-button-delete-player',
  standalone: true,
  imports: [CommonModule, ConfirmDialogModule, ButtonModule, ToastModule],
  templateUrl: './button-delete-player.component.html',
  styleUrls: ['./button-delete-player.component.scss'],
  providers: [ConfirmationService, MessageService],
})
export class ButtonDeletePlayerComponent implements OnInit {
  @Input() player!: Player;
  @Output() playerDeleted: EventEmitter<any> = new EventEmitter();

  constructor(
    private _confirmationService: ConfirmationService,
    private _messageService: MessageService,
    private _playersService: PlayersService
  ) {}

  ngOnInit(): void {}

  openConfirmDialog() {
    this._confirmationService.confirm({
      message: `¿Estas segura que quieres de dar de baja a ${this.player?.name} ${this.player?.surname}? Esta operación es irreversible`,
      icon: 'pi pi-info-circle',
      accept: () => {
        this._playersService
          .deletePlayer(this.player)
          .pipe(
            tap(() => {
              this._messageService.add({
                severity: 'success',
                summary: 'Confirmado',
                detail: `${this.player?.name} ${this.player?.surname} ha sido eliminada`,
              });
              setTimeout(() => {
                this.playerDeleted.emit();
              }, 1000);
            })
          )
          .subscribe();
      },
    });
  }
}
