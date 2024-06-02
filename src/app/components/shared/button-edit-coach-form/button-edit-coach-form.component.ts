import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { KnobModule } from 'primeng/knob';
import { DEFAULT_AVATAR } from 'src/app/constants/constants';
import { Player } from 'src/app/models/coaches.model';

@Component({
  selector: 'app-button-edit-coach-form',
  standalone: true,
  imports: [CommonModule, DialogModule, KnobModule, ButtonModule, ReactiveFormsModule, FormsModule, InputNumberModule],
  templateUrl: './button-edit-coach-form.component.html',
  styleUrls: ['./button-edit-coach-form.component.scss'],
})
export class ButtonEditCoachFormComponent implements OnInit {
  @Input() player?: Player;
  visible = false;
  playerStatsForm!: FormGroup;
  constructor(private _fb: FormBuilder) {
    
  }

  ngOnInit(): void {
    if(this.player) {
      this.playerStatsForm = this._fb.group({
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
      console.log(this.playerStatsForm.value);
  }

  openDialogForm() {
    this.visible = true;
  }

  closeDialogForm() {
    this.visible = false;
  }
}
