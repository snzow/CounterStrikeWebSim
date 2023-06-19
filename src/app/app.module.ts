import { LeaderboardService } from './leaderboard.service';
import { TournamentService } from './tournament/tournament.service';
import { PlayerService } from './player/player-service';
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
import { NotificationService } from './notifications/notification.service';
import { TournamentComponent } from './tournament/tournament.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { WeekstatusComponent } from './weekstatus/weekstatus.component';

@NgModule({
  declarations: [
    AppComponent,
    LeaderboardComponent,
    PlayerComponent,
    GameComponent,
    DbComponent,
    TournamentComponent,
    NotificationsComponent,
    WeekstatusComponent
  
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
