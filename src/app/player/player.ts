import { Injectable} from "@angular/core";


export class Player{
    _name : string;
    _skill : number;
    _wins : number;
    _losses : number;
    _points : number;
    constructor(tag : string){
        this._name = tag;
        this._skill = 1500;
        this._wins = 0;
        this._losses = 0;
        this._points = 0;
    }

    get name(){
        return this._name;
    }

    toString(){
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

    get points(){
        return this._points;
    }

    addWin(){
        this._wins++;
        this._skill += 15;
    }

    addLoss(){
        this._losses++;
        this._skill -= 15;
    }

    addPoints(amt : number){
        this._points += amt;
    }
}