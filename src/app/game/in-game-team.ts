import { GameMap } from './gameMap';
import { GunService } from './../services/gun.service';
import { InGamePlayer } from "./in-game-player";
import { Team } from "../team/team";
import { GeneralService } from '../services/general.service';
import { InGameZone } from './ingame-zone';


export class InGameTeam{



    name : string;
    players : Array<InGamePlayer>;
    livingPlayers : Array<InGamePlayer>;
    deadPlayers : Array<InGamePlayer>;
    side : number;
    map : GameMap;

    constructor(t : Team, private gunService : GunService,private genService :GeneralService,side : number, map : GameMap){
        this.name = t.name;
        this.players = new Array<InGamePlayer>;
        this.side = side;
        this.map = map;
        let playerL : InGameZone;
        if(this.side == 0){
            playerL = map.ctSpawn;
        }
        else{
            playerL = map.tSpawn;
        }
        t.players.forEach(player => this.players.push(new InGamePlayer(player.name,player.skill,this,gunService,genService,playerL,side)));
        this.livingPlayers = this.players.slice();
        this.deadPlayers = new Array<InGamePlayer>;
    }

    startRound(){
        this.livingPlayers.forEach(player => buyGun());
    }

    
}