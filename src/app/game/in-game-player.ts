import { GunService } from "../services/gun.service";
import { InGameTeam } from "./in-game-team";
import { Gun } from "./gun";
import { InGameZone } from "./ingame-zone";
import { GeneralService } from "../services/general.service";

export class InGamePlayer{
    name : string;
    health: number;
    skill :number;
    armor : boolean;
    money : number;
    gun : Gun;
    team : InGameTeam;
    target : InGamePlayer | undefined;
    location : InGameZone;
    side : number;
    gunCD : number;
    kills : number;
    deaths : number;


    constructor(name : string, skill : number, team : InGameTeam, private gunService : GunService, private gs : GeneralService  , location : InGameZone, side : number){
        this.name = name;
        this.health = 100;
        this.armor = false;
        this.skill = skill;
        this.money = 500;
        this.team = team;
        this.gunCD = 0;
        this.gun = gunService.getWeapon("pistol");
        this.location = location;
        this.side = side;
        this.kills = 0;
        this.deaths = 0;
    }

    combatTick(){
        let opponents;
        if(this.side == 0){
            opponents = this.location.t;
        }
        else{
            opponents = this.location.t;
        }
        if(this.target == undefined){
            if(opponents.length > 0){
                this.target = opponents[0];
                return;
            }
        }
        else{
            if(this.gunCD == 0){
                this.shootAt(this.target);
            }
            else{
                this.gunCD--;
            }
        }
        if(opponents.length == 0){

        }
    }

    shootAt(p : InGamePlayer){
        let seed = this.gs.getRandomNumber(0,2001);
        if(seed <= this.skill){
            this.gunCD = this.gun.cd;
            let dmg = this.gun.dmg;
            if(seed >= this.skill - 100){
                dmg = this.gun.dmg * 2;
            }
            if(p.hit(dmg)){
                this.location.removePlayer(p);
                this.money += 300;
            }
        }
    }

    hit(dmg : number) : boolean{
        let mit = 1;
        if(this.armor){
            mit = 1.5
        }
        this.health -= dmg/ mit;
        if(this.health <= 0){
            this.health = 100;
            this.armor = false;
            return true;
        }
        else{
            return false;
        }
    }

    changeLocation(zone : InGameZone){
        this.location = zone;
        this.target = undefined;
    }

    buyGun(){
        if(this.skill > 1750){
            this.gun = this.gunService.getWeapon("sniper");
        }
        else{
            this.gun = this.gunService.getWeapon("rifle");
        }
    }
    

}