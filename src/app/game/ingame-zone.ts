import { InGamePlayer } from "./in-game-player";

export class InGameZone{


    ct : Array<InGamePlayer>;
    t : Array<InGamePlayer>;

    constructor(){
        this.ct = new Array<InGamePlayer>;
        this.t = new Array<InGamePlayer>;
    }

    addPlayer(p : InGamePlayer,team : string){
        if(team == "ct"){
            this.ct.push(p);
        }
        else{
            this.t.push(p);
        }
    }

    removePlayer(p : InGamePlayer){
        if(this.ct.includes(p)){
            this.ct = this.ct.splice(this.ct.indexOf(p),1);
        }
        else{
            this.t = this.t.splice(this.t.indexOf(p),1);
        }
    }

    tick(){
        this.ct.forEach(player => player.combatTick);
        this.t.forEach(player => player.combatTick);
    }
    

    
}