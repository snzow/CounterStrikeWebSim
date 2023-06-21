import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notifs : Array<string>;

  constructor() { 
    this.notifs = new Array<string>;

  }

  addNotif(notif : string){
    this.notifs.push(notif);
  }

  getNotifs() : string[]{
    return this.notifs;
  }

  clearNotifs(){
    this.notifs = new Array<string>;
  }
}
