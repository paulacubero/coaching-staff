import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';
import { SquadListComponent } from './components/screens/squad-list/squad-list.component';
import { CoachingHomeComponent } from './components/screens/coaching-home/coaching-home.component';
import { StatisticsComponent } from './components/screens/statistics/statistics.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LoginComponent,
    CoachingHomeComponent,
    SquadListComponent,
    StatisticsComponent,
    HttpClientModule
  ],
})
export class AppModule {}
