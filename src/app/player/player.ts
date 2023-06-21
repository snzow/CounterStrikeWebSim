import { Injectable} from "@angular/core";
import { Team } from "../team/team";


export class Player{
    _name : string;
    _id : number;
    _skill : number;
    _wins : number;
    _losses : number;
    _winsY : number;
    _lossesY : number;
    _pointsY : number;
    _pointsL : number;
    _salary : number;
    _team : Team;
    _elo : number;
    constructor(tag : string, skill : number, elo :number){
        this._name = tag;
        this._skill = skill;
        this._wins = 0;
        this._losses = 0;
        this._winsY = 0;
        this._lossesY = 0;
        this._pointsY = 0;
        this._pointsL = 0;
        this._id = 0;
        this._salary = 0;
        this._team = new Team("FREE AGENT", "FA");
        this._elo = elo;
    }

    get name(){
        return this._name;
    }

    toString(){
        let tag = this._team.tag;
        if(tag != "FA"){
            return tag + this._name;
        }
        return this._name;
    }

    get skill(){
        return this._skill;
    }

    get wins(){
        return this._wins;
    }

    get losses(){
        return this._losses;
    }

    get lossesY(){
        return this._lossesY;
    }

    get winsY(){
        return this._winsY;
    }

    get points(){
        return this._pointsY + this._pointsL;
    }

    addWin(p : Player){
        this._wins++;
        this._winsY++;
        this.ratingUpdate(p.skill,true);
    }

    addLoss(p : Player){
        this._lossesY++;
        this._losses++;
        this.ratingUpdate(p.skill,false);
        
    }

    addPoints(amt : number){
        this._pointsY += amt;
    }

    signContract(t : Team, sal : number, years : number){
        this._team = t;
        this._salary = sal;
    }

    endYear(){
        this._winsY = 0;
        this._lossesY = 0;
        this._pointsL = this._pointsY / 2;
        this._pointsY = 0;
    }

    ratingUpdate(oppSkill : number,win :boolean){
        if(this._skill >= oppSkill + 100){
            if(win){
                this._skill += 5;
            }
            else{
                this._skill -= 15;
            }
        }
        else if(this._skill >= oppSkill - 100){
            if(win){
                this._skill += 10;
            }
            else{
                this._skill -= 10;
            }
        }
        else{
            if(win){
                this._skill += 15;
            }
            else{
                this._skill -= 5;
            }
        }
    }

    isFA() : boolean{
        if(this._team.name == "FREE AGENT"){
            return true;
        }
        return false;
    }
}