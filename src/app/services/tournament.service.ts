import { Injectable } from '@angular/core';
import { Tournament } from '../tournament/tournament';
import { PlayerService } from './player-service';
import { LeaderboardService } from './leaderboard.service';
import { NotificationService } from './notification.service';

@Injectable()
export class TournamentService {

  tList : Array<Tournament> 
  eventCounter : number;
  _currentTourney : Tournament;

  constructor(private leaderboardService : LeaderboardService, private playerService : PlayerService, private notifService : NotificationService) {
      this.tList = new Array<Tournament>;
      this.eventCounter = 0;

      this.tList.push(new Tournament("Fall Major",0,15,8));
      this.tList.push(new Tournament("PNW Minor",1,15,8));
      this.tList.push(new Tournament("Northeast Minor",1,15,8));
      this.tList.push(new Tournament("SE Minor",1,15,8));
      this.tList.push(new Tournament("Winter Major",0,15,8));
      this.tList.push(new Tournament("American Minor",1,15,8));
      this.tList.push(new Tournament("New Leaf Minor",1,15,8));
      this.tList.push(new Tournament("Spring Major",0,15,8));
      this.tList.push(new Tournament("World Championship",0,15,8,60));

      this._currentTourney = this.tList[0];

      
   }

   runNextTourney(){
     this.notifService.clearNotifs();
      //let eventList = this.tList[this.eventCounter].playTourney(this.playerService.players);
     // eventList.forEach(item => this.notifService.addNotif(item));
      this.eventCounter++;
      console.log(this.eventCounter);
      if(this.eventCounter >= this.tList.length){
        this.eventCounter = 0;
      }
      this._currentTourney = this.tList[this.eventCounter];
      this.leaderboardService.sortPlayers();
   }

  

   get currentTourney(){
    this._currentTourney = this.tList[this.eventCounter];
    return this._currentTourney;
   }


}
