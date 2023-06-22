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
        this.ct= new InGameTeam(team1,gs,genService,0,this.map,ns);
        this.t = new InGameTeam(team2,gs,genService,1,this.map,ns);
        this.team1 = team1;
        this.team2 = team2;
        
        this.ctScore= 0;
        this.tScore = 0;
    }

    playGame(){
        let x = this.tick();
        while(x > 1){
            x = this.tick();
        }
        if(x == 0){
            this.ns.addNotif("CT Wins");    
        }
        else{
            this.ns.addNotif("T Wins")
        }
        this.printScores();
    }

    

    tick(){
        if(this.map.monitor() == 0){
            this.ctScore++;
            this.ns.addNotif("CTs Win")
            this.ns.addNotif(this.tScore + "-" + this.ctScore)
            if(this.ctScore == 16){
                return 0;
            }
            this.startRound();
        }
        else if(this.map.monitor() == 1){
            this.tScore++;
            this.ns.addNotif("Ts Win")
            this.ns.addNotif(this.tScore + "-" + this.ctScore)
            if(this.tScore == 16){
                return 1;
            }
            this.startRound();
            
        }
        this.map.tick();
        return 2;
    }

    startRound(){
        console.log("ROUND " + (this.ctScore + this.tScore) + " BEGINNING");
        this.ct.livingPlayers = this.ct.players.slice();
        this.t.livingPlayers = this.t.players.slice();
        this.ct.deadPlayers = new Array<InGamePlayer>;
        this.t.deadPlayers = new Array<InGamePlayer>;
        this.ct.startRound();
        this.t.startRound();
        this.ct.ctSide();
        this.map.tick();
        this.t.tSide();
    }


    getRandomInt(max : number){
        return Math.floor(Math.random()*max);
    }

    printScores(){
        this.ns.addNotif("T SIDE");
        this.t.players.forEach(player => this.ns.addNotif(player.getScore()));
        this.ns.addNotif("CT SIDE");
        this.ct.players.forEach(player => this.ns.addNotif(player.getScore()));
    }
    
    

}