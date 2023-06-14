import { Player } from '../player/player';
import { Game } from '../game/game';


export class Tournament{

    _name : string;
    _points : number;
    _prize : number;
    _size : number;
    _pastWinner : Player;
    _pastWinners : Array<Player>;
    _entrants : Array<Player>;
    _gameList : Array<Game>;

    constructor(name: string, points : number, prize : number, size : number){
        this._name = name;
        this._points = points;
        this._prize = prize;
        this._size = size;
        this._pastWinner = new Player("NO WINNER");
        this._pastWinners = new Array<Player>;
        this._entrants = new Array<Player>;
        this._gameList = new Array<Game>;
    }

    initTourney(entrants : Array<Player> ){
        this._gameList = new Array<Game>;
        this._entrants = entrants;
        let players = this._entrants;
        let reverseCounter = entrants.length - 1;
        for(let i = 0; i < players.length/2; i ++){
            let game = new Game(players[i],players[reverseCounter]);
            this._gameList.push(game);
            reverseCounter--;
        }
    }

    playTourney(entrants:Array<Player>){
        
        let round1 = entrants;
        let round2 =new Array<Player>;
        let round3 = new Array<Player>;
        let roundList =new  Array<Array<Player>>;
        roundList.push(round1);
        roundList.push(round2);
        roundList.push(round3);


        for(let i = 0; i < 3; i++){
            let x = roundList[i].length - 1;
            for(let j = 0; j < roundList[i].length - 1; j++){
                let g = new Game(roundList[i][j],roundList[i][x]);
                if(i < 2){
                    roundList[i + 1].push(g.playGame());
                }
                x--;
            }
        }
        let g = new Game(roundList[2][0],roundList[2][1]);
        let p = g.playGame();
        this._pastWinners.push(p);
        this._pastWinner = p;

    }
/*
    playNextRound(){
        let players = this._entrants;
        let toReturn = new Array<Player>;
        
        let reverseCounter = players.length - 1;
        for(let i = 0; i < this._gameList.length; i++){
            toReturn.push(this._gameList[i].playGame());
        }
        this._entrants = toReturn;
        if(toReturn.length == 1){
            this._pastWinners.push(toReturn[0]);
            this._pastWinner = toReturn[0];
            return;
        }
        this._gameList = new Array<Game>;
        for(let i = 0; i < toReturn.length/2; i ++){
            toReturn[i]._points += this._points;
            toReturn[reverseCounter]._points += this._points;
            let game = new Game(toReturn[i],toReturn[reverseCounter]);
            reverseCounter--;
            this._gameList.push(game);
        }
    }
*/


}