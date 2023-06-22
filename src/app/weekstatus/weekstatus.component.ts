import { WeekService } from './../services/week.service';
import { TournamentService } from '../services/tournament.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-weekstatus',
  templateUrl: './weekstatus.component.html',
  styleUrls: ['./weekstatus.component.css']
})
export class WeekstatusComponent {
  tournamentsRun : number;
  stage : string;
  constructor(private tournamentService : TournamentService,private weekService : WeekService){
    this.tournamentsRun = 0;
    this.stage = "Pre-Season";
  }

  nextWeek(){
    this.weekService.nextWeek();
    this.stage = this.tournamentService._currentTourney._name;
    this.tournamentService.runNextTourney();
    }
  
    getWeek(){
      return this.weekService.getWeek();
    }

   
}
