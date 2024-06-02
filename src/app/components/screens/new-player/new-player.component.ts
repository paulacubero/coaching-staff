import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ButtonModule } from 'primeng/button';
import { DEFAULT_AVATAR, POSITIONS } from 'src/app/constants/constants';

@Component({
  selector: 'app-new-player',
  standalone: true,
  imports: [CommonModule, InputTextModule, InputNumberModule, InputSwitchModule, ButtonModule, ReactiveFormsModule],
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.scss']
})
export class NewPlayerComponent implements OnInit {
  positions: string[] = POSITIONS;
  playerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.playerForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      age: [null, [Validators.required, Validators.min(0)]],
      height: [null, [Validators.required, Validators.min(0)]],
      weight: [null, [Validators.required, Validators.min(0)]],
      position: ['', Validators.required],
      dorsal: [null, [Validators.required, Validators.min(0)]],
      img: ['']
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.playerForm.value);
    if (this.playerForm.valid) {
    }
  }

  getImage() {
    return this.playerForm.value.img ? this.playerForm.value.img : DEFAULT_AVATAR;
  }
}
