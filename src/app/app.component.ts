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
  title = "SmashSim";
}

