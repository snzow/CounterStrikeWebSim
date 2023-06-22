import { WeekService } from './../services/week.service';
import { TournamentService } from '../services/tournament.service';
import { Component } from '@angular/core';
import { MatchmakingService } from '../services/matchmaking.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-weekstatus',
  templateUrl: './weekstatus.component.html',
  styleUrls: ['./weekstatus.component.css']
})
export class WeekstatusComponent {
  tournamentsRun : number;
  stage : string;
  constructor(private tournamentService : TournamentService,private weekService : WeekService, private mmS : MatchmakingService,private ns : NotificationService){
    this.tournamentsRun = 0;
    this.stage = "Pre-Season";
  }

  nextWeek(){
    this.ns.clearNotifs();
    this.weekService.nextWeek();
    this.mmS.playGame();
    //for(let i = 0; i < 100; i++){
    //  this.mmS.playGame();
  //  }
    this.stage = this.tournamentService._currentTourney._name;
    //this.tournamentService.runNextTourney();
    }
  
    getWeek(){
      return this.weekService.getWeek();
    }

   
}
