import { Component } from '@angular/core';
import { PlayerService } from '../player/player-service';
import { Player } from '../player/player';
import { LeaderboardService } from '../leaderboard.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent {
  players : Array<Player>; 
  constructor(private leaderboardService : LeaderboardService){
    this.players = [new Player("DAVE")];
    this.setPlayers();
  }

  setPlayers(){
    this.players = this.leaderboardService.sortPlayers(10);
  }
}
