import { Injectable } from "@angular/core";
import { Player } from "./player";

@Injectable()
export class PlayerService{

    _players : Array<Player>;
    _playerMap : Map<string,Player>;
    playerName : string;


    constructor(){
        this._players = new Array<Player>;
        this._playerMap = new Map<string,Player>;
        this.playerName = "";
        
    }
    
    addPlayer(playerName : string){
        let temp = new Player(playerName);
        if(this._playerMap.get(temp.name) == undefined){
          this._players.push(temp);
          this._playerMap.set(temp.name,temp);
        }
        this.playerName = '';
        
    }

    getPlayer(playerName : string) : Player{
        
        return this._playerMap.get(playerName) || new Player("TEMPORARY PLAYER");
        
    }

    get players(){
        return this._players;
    }
}