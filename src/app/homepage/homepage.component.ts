import { Component } from '@angular/core';
import { BackgroundserviceService } from '../backgroudservice/backgroundservice.service';
import { SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  imageUrls: string[] = [
    'assets/images/image1.jpg',
    'assets/images/image2.jpg',
    'assets/images/image3.jpg',
    'assets/images/image4.jpg',
    'assets/images/image5.jpg'
  ];

  constructor(private syncService: BackgroundserviceService, private swPush: SwPush) {}

  triggerSync() {
    this.syncService.triggerBackgroundSync();
  }


  readonly VAPID_PUBLIC_KEY = "BJPUzIXXufOrNBxpu0A3EpLlNfVzWUw3QyCnBic3HVY6ylYia6pk3T4Niw7GL_EHrHRXG_h2UboTO34LZdRJt88";
  
  subscribeToNotifications() {
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    }).then(sub => console.log("you have subscribed"))
  }
}
