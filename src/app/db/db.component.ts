import { PlayerService } from '../services/player-service';
import { Component } from '@angular/core';
import { Player } from '../player/player';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-db',
  templateUrl: './db.component.html',
  styleUrls: ['./db.component.css']
})
export class DbComponent {
  playerName : string;
  players : Array<Player>;

  constructor(private Playerservice : PlayerService,private generalService : GeneralService){
      this.playerName = "";
      this.players = this.Playerservice.players;
  }

  addPlayer(name : string){
    if(name == ""){
      return;
    }
    this.Playerservice.addPlayer(name,this.generalService.getRandomNumber(1400,1700));
    this.playerName = "";
  }
    
}
