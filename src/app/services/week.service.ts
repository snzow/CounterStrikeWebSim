import { TournamentService } from './tournament.service';
import { Injectable } from '@angular/core';
import { PlayerService } from './player-service';


@Injectable({
  providedIn: 'root'
})
export class WeekService {

  week : number;
  constructor(private tournamentService :TournamentService,private playerService : PlayerService) {
    this.week = 1;
   }

  nextWeek(){
    this.week++;
    if(this.week >= this.tournamentService.tList.length + 1){
      this.playerService.yearEnd();
      this.week = 1;
    }
  }

  getWeek(){
    return this.week;
  }



}
