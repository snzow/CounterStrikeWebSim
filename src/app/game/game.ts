import { NotificationsComponent } from './../notifications/notifications.component';
import { Player } from "../player/player";
import { Team } from "../team/team";
import { InGamePlayer } from "./in-game-player";
import { NotificationService } from '../services/notification.service';
import { InGameTeam } from './in-game-team';
import { InGameZone } from './ingame-zone';
import { GunService } from '../services/gun.service';
import { GameMap } from './gameMap';
import { GeneralService } from '../services/general.service';

export class Game{ 

    team1 : Team;
    team2 : Team;
    ct : InGameTeam;
    t : InGameTeam;
    map : GameMap; 
    ctScore : number;
    tScore : number; 
    

    constructor (team1 : Team, team2 : Team, private ns : NotificationService, private gs : GunService, private genService : GeneralService ){
        this.map = new GameMap("Dust2")
        this.ct= new InGameTeam(team1,gs,genService,0,this.map);
        this.t = new InGameTeam(team2,gs,genService,1,this.map);
        this.team1 = team1;
        this.team2 = team2;
        
        this.ctScore= 0;
        this.tScore = 0;
    }

    

    tick(){
        if(this.map.monitor() == 0){
            this.ctScore++;
            if(this.ctScore == 16){
                return 0;
            }
        }
        else if(this.map.monitor() == 1){
            this.tScore++;
            if(this.tScore == 16){
                return 1;
            }
        }
        this.map.tick();
        return 2;
    }

    resetTeams(){
        this.ct.livingPlayers = this.ct.players.slice();
        this.t.livingPlayers = this.t.players.slice();
    }

    getRandomInt(max : number){
        return Math.floor(Math.random()*max);
    }



}