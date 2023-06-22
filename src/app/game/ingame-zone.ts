import { InGamePlayer } from "./in-game-player";

export class InGameZone{


    ct : Array<InGamePlayer>;
    t : Array<InGamePlayer>;
    name : string;

    constructor(name : string){
        this.ct = new Array<InGamePlayer>;
        this.t = new Array<InGamePlayer>;
        this.name = name;
    }

    addPlayer(p : InGamePlayer,team :number){
        if(team == 0){
            this.ct.push(p);
        }
        else{
            this.t.push(p);
        }
    }

    removePlayer(p : InGamePlayer){
        if(this.ct.includes(p)){
            const index = this.ct.indexOf(p,0);
            this.ct.splice(index,1);
        }
        else{
            const index = this.t.indexOf(p,0);
            this.t.splice(index,1);
        }
    }

    tick(){
        console.log(this.name + " tick");
        this.ct.forEach(player => console.log("ct: " + player.name));
        this.t.forEach(player => console.log("t: " + player.name));
        this.ct.forEach(player => player.combatTick());
        this.t.forEach(player => player.combatTick());
    }
    

    
}