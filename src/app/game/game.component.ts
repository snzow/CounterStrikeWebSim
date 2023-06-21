import { PlayerService } from '../services/player-service';
import { Component } from '@angular/core';
import { Player } from '../player/player';
import { Game } from './game';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent 
{
  

  constructor(private playerService : PlayerService){

  }

  playGame(p1 : Player, p2 : Player){   
    let g = new Game(p1,p2);
    g.playGame;

  }
  


}
