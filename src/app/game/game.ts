import { Player } from "../player/player";

export class Game{ 

    playerA : Player;
    playerB : Player;

    constructor (playerA : Player, playerB : Player){
        this.playerA = playerA;
        this.playerB = playerB;
    }


    playGame(){
        
        let p1s = this.playerA.skill;
        let p2s = this.playerB.skill;
        let p1Stocks = 4;
        let p2Stocks = 4;
        while(p1Stocks > 0 && p2Stocks > 0){
            let seed = this.getRandomInt(p1s + p2s);
            if(seed > p1s){
                p1Stocks--;
            }
            else{
                p2Stocks--;
            }
        }
        if(p1Stocks > 0){
            this.playerA.addWin();
            this.playerB.addLoss();
        }
        else{
            this.playerA.addLoss();
            this.playerB.addWin();
        }

        

    }

    getRandomInt(max : number){
        return Math.floor(Math.random()*max);
    }



}