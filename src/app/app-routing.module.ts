import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SquadListComponent } from './components/screens/squad-list/squad-list.component';
import { CoachingHomeComponent } from './components/screens/coaching-home/coaching-home.component';
import { StatisticsComponent } from './components/screens/statistics/statistics.component';
import { NewPlayerComponent } from './components/screens/new-player/new-player.component';
import { MedicalHomeComponent } from './components/screens/medical-home/medical-home.component';
import { AuthMedicalGuard } from './guards/auth-medical.guard';
import { AuthCoachGuard } from './guards/auth-coach.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'coaching',
    component: CoachingHomeComponent,
    canActivate: [AuthCoachGuard],
    children: [
      { path: '', redirectTo: 'squad-list', pathMatch: 'full' },
      { path: 'squad-list', component: SquadListComponent },
      { path: 'statistics', component: StatisticsComponent },
      { path: 'new-player', component: NewPlayerComponent }
      
    ],
  },
  {
    path: 'medical',
    component: MedicalHomeComponent,
    canActivate: [AuthMedicalGuard],
    children: [
    ],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
