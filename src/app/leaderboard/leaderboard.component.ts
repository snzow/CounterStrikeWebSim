import { Component } from '@angular/core';
import { PlayerService } from '../player/player-service';
import { Player } from '../player/player';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent {
  players : Array<Player>;
  constructor(private playerService : PlayerService){
      this.players = playerService.players
      this.players = this.players.sort(this.sortPlayer);
  }

  sortPlayer(p1 : Player, p2 : Player){
    if(p1.points > p2.points){
      return 1;
    }
    else if(p2.points > p1.points){
      return -1;
    }
    else{
      return 0;
    }
  }
}
