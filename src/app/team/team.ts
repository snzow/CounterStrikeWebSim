import { Player } from "../player/player";



export class Team{
    players : Player[];
    name : string;
    tag : string;
    balance : number;
    tsWon : number;
    pointsY : number;
    pointsL : number;
    runningPerf : number;
    wins : number;
    losses : number;
    winsY : number;
    lossesY : number;
    worldRanking : number;

    constructor(name : string, tag : string){
        this.name = name;
        this.tag = tag;
        this.players = new Array<Player>;
        this.balance = 200_000;
        this.tsWon = 0;
        this.pointsY = 0;
        this.pointsL = 0;
        this.runningPerf = 0;
        this.wins = 0;
        this.losses = 0;
        this.lossesY = 0;
        this.winsY = 0;
        this.worldRanking = 1000;

    }

    signPlayer(p : Player){
        p.signContract(this,this.balance/10,3);
    }
    

}