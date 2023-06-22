export class Gun{
    name : string;
    dmg : number;
    cost : number;
    cd : number;

    constructor(name : string, dmg : number, cost : number, cd : number){
        this.name = name;
        this.dmg = dmg;
        this.cost = cost;
        this.cd = cd;
    }
}