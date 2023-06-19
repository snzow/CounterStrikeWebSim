import { TournamentService } from './../tournament/tournament.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-weekstatus',
  templateUrl: './weekstatus.component.html',
  styleUrls: ['./weekstatus.component.css']
})
export class WeekstatusComponent {
  week : number;
  tournamentsRun : number;
  stage : string;
  constructor(private tournamentService : TournamentService){
    this.week = 1;
    this.tournamentsRun = 0;
    this.stage = "Pre-Season";
  }

  nextWeek(){
    this.week++;
    
    if(this.week % 2 == 0){
      this.stage = this.tournamentService._currentTourney._name;
      this.tournamentService.runNextTourney();
    }
    if(this.week >= this.tournamentService.tList.length){
      this.week == 1;
    }
    
  }
}
