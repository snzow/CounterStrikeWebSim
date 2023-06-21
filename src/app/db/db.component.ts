import { PlayerService } from '../services/player-service';
import { Component } from '@angular/core';
import { Player } from '../player/player';

@Component({
  selector: 'app-db',
  templateUrl: './db.component.html',
  styleUrls: ['./db.component.css']
})
export class DbComponent {
  playerName : string;
  players : Array<Player>;

  constructor(private Playerservice : PlayerService){
      this.playerName = "";
      this.players = this.Playerservice.players;
  }

  addPlayer(name : string){
    this.Playerservice.addPlayer(name);
    this.playerName = "";
  }
    
}
