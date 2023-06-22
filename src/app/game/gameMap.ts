import { InGameZone } from "./ingame-zone";


export class GameMap{
    A : InGameZone;
    B : InGameZone;
    tSpawn : InGameZone;
    ctSpawn : InGameZone;
    name : string;
    bombPlanted : boolean;
    bombLocation : InGameZone | undefined;
    areas : Array<InGameZone>;


    constructor(name : string){
        this.name = name;
        this.A = new InGameZone("A");
        this.B = new InGameZone("B");
        this.tSpawn = new InGameZone("T SPAWN");
        this.ctSpawn = new InGameZone("CT SPAWN");
        this.bombPlanted = false;
        this.areas = new Array<InGameZone>;
        this.areas.push(this.A);
        this.areas.push(this.B);
        this.areas.push(this.tSpawn);
        this.areas.push(this.ctSpawn);

    }

    monitor(){
        if(this.getCtPlayerCount() == 0){
            return 1;
        }
        else if(this.getTPlayerCount() == 0){
            return 0;
        }
        else{
            return 2;
        }
    }

    tick(){
        console.log("map tick");
        this.areas.forEach(area => area.tick());
    }


    getCtPlayerCount(){
        let x = this.A.ct.length + this.B.ct.length + this.ctSpawn.ct.length;
        console.log(x);
        return x;
    }
    
    getTPlayerCount(){
        let x = this.A.t.length + this.B.t.length + this.tSpawn.t.length;
        console.log(x);
        return x;
    }
    
    getOtherSite(zone : InGameZone){
        if(zone == this.A){
            return this.B
        }
        else{
            return this.A;
        }
    }
}