import { Injectable } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root',
})
export class BackgroundserviceService {
  constructor(private swUpdate: SwUpdate) {
    navigator.serviceWorker.ready.then(() => {
      console.log('Service Worker is ready.');
      this.checkIfUpdatesEnabled();
    });
  }
  
  checkIfUpdatesEnabled() {
    if (this.swUpdate.isEnabled) {
      console.log('Updates are enabled!');
      // Your code for handling updates
    } else {
      console.warn('Updates are not enabled.');
    }
  }

  triggerBackgroundSync() {
    if ('serviceWorker' in navigator) {
      if (this.swUpdate.isEnabled) {
        navigator.serviceWorker.ready
          .then((registration) => {
            // console.log('Service Worker Ready:', registration);
    
            const syncRegistration = (registration as any).sync;
    
            if (syncRegistration) {
              console.log('Sync API is supported.');
              return syncRegistration.register('syncTask');
            } else {
              console.error('Sync API is not supported.');
            }
          })
          .then(() => console.log('Sync Task Registered'))
          .catch((err) => console.error('Could not register sync task:', err));
      }else {
        console.log(this.swUpdate.isEnabled + ' za sw update');
      }
    } else {
      console.error('Service Worker is not supported in this browser.');
    }
    
  } 
}
