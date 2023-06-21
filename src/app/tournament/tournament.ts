import { Player } from '../player/player';
import { Game } from '../game/game';
import { LeaderboardService } from '../services/leaderboard.service';
import { NotificationService } from '../services/notification.service';




export class Tournament{

    _name : string;
    _points : number;
    _prize : number;
    _size : number;
    _pastWinner : Player;
    _pastWinners : Array<Player>;
    _entrants : Array<Player>;
    _gameList : Array<Game>;
    _type : number;

    constructor(name: string,type : number , prize : number, size : number,points? : number ){
        this._name = name;
        if(points != undefined){
            this._points = points;
        }
        else if(type == 0){
            this._points = 50;
        }
        else{
            this._points = 25;
        }
        this._prize = prize;
        this._size = size;
        this._pastWinner = new Player("NO WINNER",0,0);
        this._pastWinners = new Array<Player>;
        this._entrants = new Array<Player>;
        this._gameList = new Array<Game>;
        this._type = type;
    }

    

    initTourney(entrants : Array<Player> ){
        this._gameList = new Array<Game>;
        this._entrants = entrants.slice();
        let players = this._entrants;
        let reverseCounter = entrants.length - 1;
        for(let i = 0; i < players.length/2; i ++){
            let game = new Game(players[i],players[reverseCounter]);
            this._gameList.push(game);
            reverseCounter--;
        }
    }

    playTourney(entrants:Array<Player>){
        let notifList = new Array<string>;
        if(this._type = 0){
            this._entrants = entrants.slice(0,8);
        }
        else{
            this._entrants = entrants.slice(-8,);
        }
        
        let round1 = this._entrants;
        console.log(round1);
        if(round1.length < 8){
            notifList.push("No tournament held");
            console.error("ERROR: Not enough players to play tournament");
            return notifList;
        }
        let round2 =new Array<Player>;
        let round3 = new Array<Player>;
        let roundList =new  Array<Array<Player>>;
        roundList.push(round1);
        roundList.push(round2);
        roundList.push(round3);
        for(let i = 0; i < 3; i++){
            let x = roundList[i].length - 1;
            notifList.push("--- ROUND " + (i + 1)+ " ---")
            for(let j = 0; j < roundList[i].length/2; j++){
                let g = new Game(roundList[i][j],roundList[i][x]);
                g.playerA.addPoints(this._points);
                g.playerB.addPoints(this._points);
                console.log("ROUND " + (i + 1) + " " + g.playerA.toString() + " vs " + g.playerB.toString());
                let q;
                if(i < 2){
                    q = g.playGame();
                    console.log(q + " WINS ");
                    roundList[i + 1].push(q);
                    if(q == g.playerA){
                        notifList.push(g.playerA.toString() + " defeats " + g.playerB.toString());
                    }
                    else{
                        notifList.push(g.playerB.toString() + " defeats " + g.playerA.toString());
                    }
                }
                x--;
            }
        }
        let g = new Game(roundList[2][0],roundList[2][1]);
        let p = g.playGame();
        this._pastWinners.push(p);
        p.addPoints(25);
        console.log(p.toString() + " WINS");
        notifList.push(p.toString() + " Wins " + this._name);
        this._pastWinner = p;
        
        return notifList;
        
    }



}