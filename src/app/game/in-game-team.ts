import { GameMap } from './gameMap';
import { GunService } from './../services/gun.service';
import { InGamePlayer } from "./in-game-player";
import { Team } from "../team/team";
import { GeneralService } from '../services/general.service';
import { InGameZone } from './ingame-zone';
import { NotificationService } from '../services/notification.service';


export class InGameTeam{



    name : string;
    players : Array<InGamePlayer>;
    livingPlayers : Array<InGamePlayer>;
    deadPlayers : Array<InGamePlayer>;
    side : number;
    map : GameMap;

    constructor(t : Team, private gunService : GunService,private genService :GeneralService,side : number, map : GameMap, private ns : NotificationService){
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
        t.players.forEach(player => this.players.push(new InGamePlayer(player.name,player.skill,this,gunService,genService,playerL,side,ns,map)));
        this.livingPlayers = this.players.slice();
        this.deadPlayers = new Array<InGamePlayer>;
    }

    startRound(){
        console.log(this.name + " starting round");
        this.livingPlayers.forEach(player => player.buyGun());
        if(this.side == 1){
            this.livingPlayers.forEach(player => player.changeLocation(this.map.tSpawn));
        }
        else{
            this.livingPlayers.forEach(player => player.changeLocation(this.map.ctSpawn));
        }
        
        
    }

    tSide(){
        let seed = this.genService.getRandomNumber(0,2);
        if(seed == 0){
            this.executeA();
            this.ns.addNotif("Ts Are Executing A");
        }
        else{
            this.executeB();
            this.ns.addNotif("Ts Are Executing B");
        }
    }

    ctSide(){
        let seed = this.genService.getRandomNumber(0,2);
        if(seed == 0){
            this.players[0].changeLocation(this.map.A);
        }
        else{
            this.players[0].changeLocation(this.map.B);
        }
        this.players[1].changeLocation(this.map.A);
        this.players[2].changeLocation(this.map.A);
        this.players[3].changeLocation(this.map.B);
        this.players[4].changeLocation(this.map.B);
    }
    

    executeA(){
        this.players.forEach(player => player.changeLocation(this.map.A));
    }
    
    executeB(){
        this.players.forEach(player => player.changeLocation(this.map.B));
    }

    
}