import { PlayerComponent } from './player/player.component';
import { Component } from '@angular/core';
import { Player } from './player/player';
import { GameComponent } from './game/game.component';
import { Game } from './game/game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SmashSim';
  player1 : Player = new Player("AodhaN");
  player2 : Player = new Player("Fiyah");
  g : Game = new Game(this.player1,this.player2);

  playGame(){
    this.g.playGame()
  }
}
