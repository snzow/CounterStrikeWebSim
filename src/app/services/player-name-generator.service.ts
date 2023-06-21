import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PlayerNameGeneratorService {
  playerNames : Array<string>;
  constructor() { 
    this.playerNames = new Array<string>;
  }


}
