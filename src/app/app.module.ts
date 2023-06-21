import { LeaderboardService } from './services/leaderboard.service';
import { TournamentService } from './services/tournament.service';
import { PlayerService } from './services/player-service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { PlayerComponent } from './player/player.component';
import { GameComponent } from './game/game.component';
import { DbComponent } from './db/db.component';
import { FormsModule } from '@angular/forms';
import { Player } from './player/player';
import { NotificationService } from './services/notification.service';
import { TournamentComponent } from './tournament/tournament.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { WeekstatusComponent } from './weekstatus/weekstatus.component';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';
import { PlayernameComponent } from './playername/playername.component';

@NgModule({
  declarations: [
    AppComponent,
    LeaderboardComponent,
    PlayerComponent,
    GameComponent,
    DbComponent,
    TournamentComponent,
    NotificationsComponent,
    WeekstatusComponent,
    TeamComponent,
    HomeComponent,
    PlayernameComponent,
  
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    PlayerService,
    TournamentService,
    LeaderboardService,
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
