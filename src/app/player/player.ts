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

    addWin(){
        this._wins++;
        this._winsY++;
        this._skill += 15;
    }

    addLoss(){
        this._lossesY++;
        this._losses++;
        this._skill -= 15;
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
}