import { Injectable } from '@angular/core';
import { PlayerService } from './player-service';

@Injectable({
  providedIn: 'root'
})
export class MatchmakingService {
  
  constructor(private playerService : PlayerService) { }
}
