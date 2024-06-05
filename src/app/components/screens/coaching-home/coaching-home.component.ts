import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-coaching-home',
  standalone: true,
  imports: [ButtonModule, RouterModule],
  templateUrl: './coaching-home.component.html',
  styleUrls: ['./coaching-home.component.scss'],
})
export class CoachingHomeComponent implements OnInit {
  constructor(private _authService: AuthService) {}

  ngOnInit(): void {}

  userLogOut(): void {
    this._authService.logout();
  }
}
