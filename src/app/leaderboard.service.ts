import { PlayerService } from './player/player-service';
import { Injectable } from '@angular/core';
import { Player } from './player/player';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  players : Array<Player>;
  constructor(private playerService : PlayerService){
      this.players = playerService.players
      this.sortPlayers();
  }


  sortPlayers(length? : number) : Array<Player>{
    this.players = this.players.sort(this.sortPlayerMethod);
    if(length != undefined){
      return this.players.slice(0,length);
    }
    else{
      return this.players.slice();
    }
  }

  

  sortPlayerMethod(p1 : Player, p2 : Player){
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
