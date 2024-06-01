import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { SquadListComponent } from './components/screens/squad-list/squad-list.component';
import { CoachingHomeComponent } from './components/screens/coaching-home/coaching-home.component';
import { StatisticsComponent } from './components/screens/statistics/statistics.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'coaching',
    component: CoachingHomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'squad-list', component: SquadListComponent },
      { path: 'statistics', component: StatisticsComponent }
      
    ],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
