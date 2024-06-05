import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Player } from 'src/app/models/coaches.model';
import { DEFAULT_AVATAR } from 'src/app/constants/constants';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { ButtonEditPlayerMedicalComponent } from '../button-edit-player-medical/button-edit-player-medical.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { PlayersService } from 'src/app/services/players.service';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-player-card',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    InputSwitchModule,
    ReactiveFormsModule,
    ButtonEditPlayerMedicalComponent,
  ],
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss'],
})
export class PlayerCardComponent implements OnInit {
  @Input() player!: Player;
  @Output() changeAvailability: EventEmitter<any> = new EventEmitter();

  fb = inject(FormBuilder);
  playerService = inject(PlayersService);
  availabilityForm!: FormGroup<any>;

  ngOnInit() {
    // Espera a que player esté disponible para inicializar el formulario
    if (this.player) {
      this.availabilityForm = this.fb.group({
        id: [this.player._id],
        available: [this.player.available],
      });

      // Suscríbete a los cambios de valor del formulario
      this.availabilityForm.valueChanges
        .pipe(
          switchMap((value) => {
            const newPlayerData = {
              ...this.player,
              available: value.available,
            };
            return this.playerService.editPlayer(newPlayerData);
          }),
          tap((value) => this.changeAvailability.emit(value))
        )
        .subscribe();
    }
  }

  getImage(player: Player) {
    return player.img ? player.img : DEFAULT_AVATAR;
  }
}
