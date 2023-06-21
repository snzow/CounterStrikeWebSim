import { PlayernameComponent } from './../playername/playername.component';
import { Component,OnInit } from '@angular/core';
import { PlayerService } from '../services/player-service';
import { Player } from '../player/player';
import { LeaderboardService } from '../services/leaderboard.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  players : Array<Player>; 
  constructor(private leaderboardService : LeaderboardService, private router: Router){
    this.players = [];
  }

  ngOnInit(): void {
      this.players = this.leaderboardService.sortPlayers(10);
  }

  setPlayers() : Player[]{
    return this.leaderboardService.sortPlayers(10);
  }

  onPlayerClick(playerName: string) {
    this.router.navigate(['/player', playerName]);
  }
}
