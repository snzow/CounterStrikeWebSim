import { TournamentService } from './tournament.service';
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
import { TournamentComponent } from './tournament/tournament.component';

@NgModule({
  declarations: [
    AppComponent,
    LeaderboardComponent,
    PlayerComponent,
    GameComponent,
    DbComponent,
    TournamentComponent
  
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    PlayerService,
    TournamentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
