import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
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
import { DropdownModule } from 'primeng/dropdown';
import { Router, RouterModule } from '@angular/router';

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
    DropdownModule,
    RouterModule,
  ],
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.scss'],
  providers: [MessageService],
})
export class NewPlayerComponent implements OnInit {
  router = inject(Router);
  positions: string[] = POSITIONS;
  dorsals: number[] = [];
  createPlayerForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _playersService: PlayersService,
    private _messageService: MessageService
  ) {
    this.createPlayerForm = this._fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      age: [null, [Validators.required, Validators.min(0)]],
      height: [null, [Validators.required, Validators.min(0)]],
      weight: [null, [Validators.required, Validators.min(0)]],
      position: ['', Validators.required],
      dorsal: [null, [Validators.required]],
      img: [''],
    });
  }

  ngOnInit(): void {
    this._playersService
      .getPlayers()
      .pipe(
        tap((players) => {
          const currentDorsals = players.map((player) => player.dorsal);
          const allDorsals = Array.from({ length: 30 }, (_, i) => i + 1);
          const availableDorsals = allDorsals.filter(
            (dorsal) => !currentDorsals.includes(dorsal)
          );
          this.dorsals = availableDorsals;
        })
      )
      .subscribe();
  }

  onSubmit() {
    const player = this.createPlayerForm.value;

    const newplayer = {
      ...player,
      playedMinutes: 0,
      goals: 0,
      passes: 0,
      assists: 0,
      available: true,
      injuries: [],
    };

    this._playersService
      .addPlayer(newplayer)
      .pipe(
        tap(() => {
          this._messageService.add({
            severity: 'success',
            summary: 'Confirmado',
            detail: `Se ha añadido nueva jugadora`,
          });
          setTimeout(() => {
            this.router.navigate(['/coaching/squad-list']);
          }, 1000);
        })
      )
      .subscribe();
    this.createPlayerForm.reset();
  }

  getImage() {
    return this.createPlayerForm.value.img
      ? this.createPlayerForm.value.img
      : DEFAULT_AVATAR;
  }
}
