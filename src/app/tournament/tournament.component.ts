import { TournamentService } from './tournament.service';
import { Component } from '@angular/core';
import { Tournament } from './tournament';
import { PlayerService } from '../player/player-service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent {
  name : string;
  tourney : Tournament;

  constructor(private tournamentService : TournamentService, private playerService : PlayerService){
      this.name = tournamentService.currentTourney._name;
      this.tourney = tournamentService.currentTourney;
  }

  nextRound(){
    this.tourney = this.tournamentService.currentTourney;
    this.name = this.tourney._name;
    this.tournamentService.runNextTourney();
   }
}
