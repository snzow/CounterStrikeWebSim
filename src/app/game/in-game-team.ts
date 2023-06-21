import { InGamePlayer } from "./in-game-player";
import { Team } from "../team/team";


export class InGameTeam{



    name : string;
    players : Array<InGamePlayer>;
    livingPlayers : Array<InGamePlayer>;

    constructor(t : Team){
        this.name = t.name;
        this.players = new Array<InGamePlayer>;
        t.players.forEach(player => this.players.push(new InGamePlayer(player.name,player.skill)));
    }
}