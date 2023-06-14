import { Component } from '@angular/core';
import { Player } from '../player/player';

@Component({
  selector: 'app-db',
  templateUrl: './db.component.html',
  styleUrls: ['./db.component.css']
})
export class DbComponent {
    _players : Array<Player>;
    _playerMap : Map<string,Player>;
    playerName : string;
    

    constructor(){
        this._players = new Array<Player>;
        this._playerMap = new Map<string,Player>;
        this.playerName = "";
        
    }

    get players(){
        return this._players;
    }

    addPlayer(playerName : string){
        let temp = new Player(playerName);
        if(this._playerMap.get(temp.name) == undefined){
          this._players.push(temp);
          this._playerMap.set(temp.name,temp);
        }
        this.playerName = '';
        
    }

    getPlayer(playerName : string){
        return this._playerMap.get(playerName);
    }
}
