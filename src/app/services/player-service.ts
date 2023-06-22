import { PlayerNameGeneratorService } from './player-name-generator.service';
import { Injectable } from "@angular/core";
import { Player } from "../player/player";
import { GeneralService } from "./general.service";

@Injectable()
export class PlayerService{

    _players : Array<Player>;
    _playerMap : Map<string,Player>;
    playerName : string;


    constructor(private gs : GeneralService, private nameGen : PlayerNameGeneratorService){
        this._players = new Array<Player>;
        this._playerMap = new Map<string,Player>;
        this.playerName = "";
        this.addPlayer("AodhaN",1850);
        this.addPlayer("Fiyah",1850);
        this.addPlayer("Charfra",1850);
        this.addPlayer("chousto",1850);
        this.addPlayer("Sekler", 1850);
        

        
    }
    
    addPlayer(playerName? : string,skill? : number){
        let temp = new Player("A",0,0);
        if(skill != undefined && playerName != undefined){
            temp = new Player(playerName, skill,this.gs.getRandomNumber(1800,2001));
        }
        else{
            temp = new Player(this.nameGen.getNextName(), this.gs.getRandomNumber(1300,1701),this.gs.getRandomNumber(1800,2001));
        }
        
        if(this._playerMap.get(temp.name) == undefined){
          this._players.push(temp);
          this._playerMap.set(temp.name,temp);
          temp._id = this.players.indexOf(temp);
        }
        this.playerName = '';
        
    }

    getPlayer(playerName : string) : Player{
        
        return this._playerMap.get(playerName) || new Player("TEMPORARY PLAYER",0,0);
        
    }

    get players(){
        return this._players;
    }

    yearEnd(){
        this.players.forEach(player => player.endYear());
    }

    

}