import { GunService } from "../services/gun.service";
import { InGameTeam } from "./in-game-team";
import { Gun } from "./gun";
import { InGameZone } from "./ingame-zone";
import { GeneralService } from "../services/general.service";
import { NotificationService } from "../services/notification.service";
import { GameMap } from "./gameMap";

export class InGamePlayer{
    name : string;
    map : GameMap;
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


    constructor(name : string, skill : number, team : InGameTeam, private gunService : GunService, private gs : GeneralService  , location : InGameZone, side : number,private ns : NotificationService,map : GameMap ){
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
        this.map = map;
    }

    combatTick(){
        let opponents;
        if(this.side == 0){
            opponents = this.location.t;
        }
        else{
            opponents = this.location.ct;
        }
        if(this.target == undefined){
            if(opponents.length > 0){
                this.target = opponents[0];
                return;
            }
        }
        else{
            if(this.gunCD <= 0){
                this.shootAt(this.target);
            }
            else{
                this.gunCD--;
            }
        }
        if(opponents.length == 0){
            this.changeLocation(this.map.getOtherSite(this.location));
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
                p.deaths++;
                this.kills++;
                this.ns.addNotif(this.name + " kills " + p.name + " with " + this.gun.name);
                console.log(this.name + " kills " + p.name + " with " + this.gun.name);
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
        if(this.location != undefined){
            this.location.removePlayer(this);
        }
        this.location = zone;
        zone.addPlayer(this,this.team.side);
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

    getScore() :string{
        return this.name + " || " + this.kills + "/" + this.deaths;
    }
    

}