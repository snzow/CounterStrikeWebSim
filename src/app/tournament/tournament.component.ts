import { WeekService } from './../services/week.service';
import { TournamentService } from '../services/tournament.service';
import { Component } from '@angular/core';
import { Tournament } from './tournament';
import { PlayerService } from '../services/player-service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent {
  name : string;
  tourney : Tournament;

  constructor(private tournamentService : TournamentService, private playerService : PlayerService,private weekService : WeekService){
      this.name = tournamentService.currentTourney._name;
      this.tourney = tournamentService.currentTourney;
  }

  getTName() :string{
    return this.tournamentService.tList[this.weekService.getWeek()]._name;
  }

  nextRound(){
    this.tourney = this.tournamentService.currentTourney;
    this.name = this.tourney._name;
    this.tournamentService.runNextTourney();
   }

   getDefChamp(){
    let defChamp = this.tournamentService.currentTourney._pastWinner;
    if(defChamp != undefined){
      return defChamp;
    }
    else{
      return "No Previous Winner";
    }
    
   }
}
