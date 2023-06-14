import { Injectable } from '@angular/core';
import { Tournament } from './tournament/tournament';
import { PlayerService } from './player/player-service';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  tList : Array<Tournament> 
  eventCounter : number;
  _currentTourney : Tournament;

  constructor(private playerService : PlayerService) {
      this.tList = new Array<Tournament>;
      this.eventCounter = 0;

      this.tList.push(new Tournament("Tourney 1",1000,1000,8));
      this.tList.push(new Tournament("Tourney 2",1000,1000,8));

      this._currentTourney = this.tList[0];
      this.runNextTourney;

      
   }

   runNextTourney(){
      this.tList[this.eventCounter].initTourney(this.playerService.players);
      this.tList[this.eventCounter].playTourney(this.playerService.players);
      this.eventCounter++;
      if(this.eventCounter >= this.tList.length){
        this.eventCounter = 0;
      }
      this._currentTourney = this.tList[this.eventCounter];
   }

  

   get currentTourney(){
    this._currentTourney = this.tList[this.eventCounter];
    return this._currentTourney;
   }


}
