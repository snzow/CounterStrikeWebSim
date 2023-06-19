import { Component,OnInit } from '@angular/core';
import { PlayerService } from '../player/player-service';
import { Player } from '../player/player';
import { LeaderboardService } from '../leaderboard.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  players : Array<Player>; 
  constructor(private leaderboardService : LeaderboardService){
    this.players = [];
  }

  ngOnInit(): void {
      this.players = this.leaderboardService.sortPlayers(10);
  }

  setPlayers() : Player[]{
    return this.leaderboardService.sortPlayers(10);
  }
}
