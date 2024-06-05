import { CommonModule, DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { KnobModule } from 'primeng/knob';
import { ToastModule } from 'primeng/toast';
import { DEFAULT_AVATAR } from 'src/app/constants/constants';
import { Player } from 'src/app/models/coaches.model';
import { MessageService } from 'primeng/api';
import { PlayersService } from 'src/app/services/players.service';
import { tap } from 'rxjs';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-button-edit-player-medical',
  standalone: true,
  imports: [
    CommonModule,
    DialogModule,
    KnobModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    CalendarModule,
    ToastModule,
    InputNumberModule,
  ],
  templateUrl: './button-edit-player-medical.component.html',
  styleUrls: ['./button-edit-player-medical.component.scss'],
  providers: [MessageService, DatePipe],
})
export class ButtonEditPlayerMedicalComponent implements OnInit {
  @Input() player!: Player;
  @Output() addInjuryToPlayer: EventEmitter<any> = new EventEmitter();

  playerWeight!: number;
  changeWeight = false;
  visible = false;
  playerMedicalForm!: FormGroup;
  playerWeightForm!: FormGroup;
  addInjury: boolean = false;
  constructor(
    private _fb: FormBuilder,
    private _messageService: MessageService,
    private _playersService: PlayersService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    if (this.player) {
      this.playerWeight = this.player.weight;
      this.playerMedicalForm = this._fb.group({
        type: ['', Validators.required],
        date: ['', Validators.required],
      });
    }
  }

  getImage(player: Player) {
    return player.img ? player.img : DEFAULT_AVATAR;
  }

  editInjury(): void {
    this.addInjury = false;
    const today = new Date();
    const { type, date } = this.playerMedicalForm.value;

    const transformedDate = this.datePipe.transform(date, 'dd/MM/yyy');
    const newPlayerData = {
      ...this.player,
      available: false,
      injuries: [
        ...this.player.injuries,
        {
          date: transformedDate
            ? transformedDate
            : this.datePipe.transform(today, 'dd/MM/yyy'),
          type,
        },
      ],
    };

    this._playersService
      .editPlayer(newPlayerData)
      .pipe(
        tap(() => {
          this.visible = false;
          this.playerMedicalForm.reset();
          this._messageService.add({
            severity: 'success',
            summary: 'Confirmado',
            detail: `Se han actualizado los datos de ${this.player?.name} ${this.player?.surname}`,
          });
          setTimeout(() => {
            this.addInjuryToPlayer.emit();
          }, 1000);
        })
      )
      .subscribe();
  }

  editWeight(): void {
    this.changeWeight = false;
    const newPlayerData = {
      ...this.player,
      weight: this.playerWeight ? this.playerWeight : this.player.weight
    };

    this._playersService
      .editPlayer(newPlayerData)
      .pipe(
        tap(() => {
          this.visible = false;
          this.playerMedicalForm.reset();
          this._messageService.add({
            severity: 'success',
            summary: 'Confirmado',
            detail: `Se han actualizado los datos de ${this.player?.name} ${this.player?.surname}`,
          });
          setTimeout(() => {
            this.addInjuryToPlayer.emit();
          }, 1000);
        })
      )
      .subscribe();
  }

  openDialogForm() {
    this.addInjury = false;
    this.visible = true;
  }

  closeDialogForm() {
    this.addInjury = false;
    this.visible = false;
  }
}
