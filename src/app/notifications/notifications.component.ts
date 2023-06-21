import { Component } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
  constructor(private notificationService : NotificationService){
  }

  getNotifs() : String[]{
    return this.notificationService.getNotifs();
  }
}
