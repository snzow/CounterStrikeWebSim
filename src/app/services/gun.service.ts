import { Injectable } from '@angular/core';
import { Gun } from '../game/gun';

@Injectable({
  providedIn: 'root'
})
export class GunService {

  guns : Map<string,Gun>
  constructor() { 
    this.guns = new Map<string,Gun>;
    this.guns.set("rifle",new Gun("Rifle",33,3000,0));
    this.guns.set("sniper",new Gun("Sniper",150,4500,5));
    this.guns.set("pistol",new Gun("Pistol",25,500,1));
  
  }

  getWeapon(name : string) : Gun{
    return this.guns.get(name) || new Gun("knife",10,0,0);
  }
}
