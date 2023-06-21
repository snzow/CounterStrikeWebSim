import { Component, Output,Input,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-playername',
  templateUrl: './playername.component.html',
  styleUrls: ['./playername.component.css']
})
export class PlayernameComponent {
  @Input() playerName : string | undefined;
  @Output() playerClick : EventEmitter<string> = new EventEmitter<string>;

  navigateToPlayer(){
    this.playerClick.emit(this.playerName);
  }

}
