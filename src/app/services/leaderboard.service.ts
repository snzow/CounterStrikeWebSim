import { PlayerService } from './player-service';
import { Injectable } from '@angular/core';
import { Player } from '../player/player';

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
    if(p1._elo > p2._elo){
      return -1;
    }
    else if(p2._elo > p1._elo){
      return 1;
    }
    else{
      return 0;
    }
  }
}
