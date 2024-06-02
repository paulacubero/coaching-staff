import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { tap } from 'rxjs';
import { DEFAULT_AVATAR, POSITIONS } from 'src/app/constants/constants';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-new-player',
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    InputNumberModule,
    InputSwitchModule,
    ButtonModule,
    ReactiveFormsModule,
    ToastModule,
  ],
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.scss'],
  providers: [MessageService]
})
export class NewPlayerComponent implements OnInit {
  positions: string[] = POSITIONS;
  playerForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _playersService: PlayersService,
    private _messageService: MessageService
  ) {
    this.playerForm = this._fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      age: [null, [Validators.required, Validators.min(0)]],
      height: [null, [Validators.required, Validators.min(0)]],
      weight: [null, [Validators.required, Validators.min(0)]],
      position: ['', Validators.required],
      dorsal: [null, [Validators.required, Validators.min(0)]],
      img: [''],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    const player = this.playerForm.value;
    this._playersService
      .addPlayer(player)
      .pipe(
        tap(() =>
          this._messageService.add({
            severity: 'success',
            summary: 'Confirmado',
            detail: `Se ha añadido nueva jugadora`,
          })
        )
      )
      .subscribe();
    this.playerForm.reset();
  }

  getImage() {
    return this.playerForm.value.img
      ? this.playerForm.value.img
      : DEFAULT_AVATAR;
  }
}
