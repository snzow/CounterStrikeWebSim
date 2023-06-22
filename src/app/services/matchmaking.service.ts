import { Injectable } from '@angular/core';
import { PlayerService } from './player-service';
import { GeneralService } from './general.service';
import { Player } from '../player/player';
import { Game } from '../game/game';
import { Team } from '../team/team';
import { NotificationService } from './notification.service';
import { GunService } from './gun.service';

@Injectable({
  providedIn: 'root'
})
export class MatchmakingService {
  ct : Team;
  t : Team;


  constructor(private playerService : PlayerService, private gs : GeneralService, private notServ : NotificationService, private gunServ : GunService) {
      this.ct = new Team("CT","");
      this.t = new Team("T","");
   }

   playGame(seed? : number){
    this.ct.players = new Array<Player>;
    this.t.players = new Array<Player>;
    if(seed == undefined){
      seed = this.gs.getRandomNumber(10,this.playerService.players.length - 1);
    }
    let ps = this.playerService.players.slice();
    ps.sort((a,b) => b.skill - a.skill)
    for(let i = seed; i > seed - 10; i--){
      if(i % 2 == 0){
        console.log("adding " + ps[i].name + "to T Side");
        this.t.players.push(ps[i]);
      }
      else{
        console.log("adding " + ps[i].name + "to CT Side");
        this.ct.players.push(ps[i])
      }
    }
    let game = new Game(this.t,this.ct,this.notServ,this.gunServ,this.gs);
    game.playGame();
   }
}
