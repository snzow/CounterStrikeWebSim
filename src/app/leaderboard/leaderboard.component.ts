import { Component } from '@angular/core';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent {
  title = "Leaderboards";
  players = ["AodhaN","Charfra","Fiyah"];
}
