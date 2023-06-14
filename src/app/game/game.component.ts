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
  player1 : Player;
  player2: Player;

  constructor(p1 : Player, p2 : Player){
    this.player1 = p1;
    this.player2 = p2;
  }

  playGame(p1 : Player, p2 : Player){   
    let g = new Game(p1,p2);
    g.playGame;


  }
  

  

}
