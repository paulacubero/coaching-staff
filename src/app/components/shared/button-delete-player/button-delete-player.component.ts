import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Player } from 'src/app/models/coaches.model';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-button-delete-player',
  standalone: true,
  imports: [CommonModule, ConfirmDialogModule, ButtonModule, ToastModule],
  templateUrl: './button-delete-player.component.html',
  styleUrls: ['./button-delete-player.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class ButtonDeletePlayerComponent implements OnInit {
  @Input() player?: Player;

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

  ngOnInit(): void {
  }

  openConfirmDialog() {
    this.confirmationService.confirm({
        message: '¿Estas segura que quieres de dar de baja a la jugadora? Esta operación no es reversible',
        icon: 'pi pi-info-circle',
        accept: () => {
          console.log('eliminando este id', this.player?.id)
          this.messageService.add({ severity: 'success', summary: 'Confirmado', detail: `${this.player?.name} ${this.player?.surname} ha sido eliminada` });
        }
    });
}

}
