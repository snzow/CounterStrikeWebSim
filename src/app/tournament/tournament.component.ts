import { TournamentService } from '../tournament.service';
import { Component } from '@angular/core';
import { Tournament } from './tournament';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent {
  name : string;
  tourney : Tournament;

  constructor(private tournamentService : TournamentService){
      this.name = tournamentService.currentTourney._name;
      this.tourney = tournamentService.currentTourney;
  }

  nextRound(){
    if(this.tourney._entrants.length <= 1){
      this.tournamentService.runNextTourney();
    }
    else{
      this.tourney = this.tournamentService.currentTourney;
      this.tourney.playNextRound;
    }
   }
}
