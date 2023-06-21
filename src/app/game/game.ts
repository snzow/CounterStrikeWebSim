import { Player } from "../player/player";
import { Team } from "../team/team";
import { InGamePlayer } from "./in-game-player";

export class Game{ 

    team1 : Team;
    team2 : Team;
    ct : Array<Player>;
    t : Array<Player>;

    constructor (team1 : Team, team2 : Team){
        this.team1 = team1;
        this.team2 = team2;
        this.ct = team1.players.slice();
        this.t = team2.players.slice();
    }

    playGame() : Player{
        

    }

    getRandomInt(max : number){
        return Math.floor(Math.random()*max);
    }



}