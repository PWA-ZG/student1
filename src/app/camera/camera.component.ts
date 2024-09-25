import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-camera',
  template: `
    <div>
      <div>
        <button (click)="startCamera()">Start Camera</button>
        <button *ngIf="isCameraActive()" (click)="stopCamera()">Stop Camera</button>
      </div>
      <video #videoElement width="400" height="300" border="1px red" autoplay></video>
    </div>
  `,
})
export class CameraComponent {
  @ViewChild('videoElement') videoElement!: ElementRef;
  private mediaStream: MediaStream | null = null;

  startCamera() {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        this.mediaStream = stream;
        this.videoElement.nativeElement.srcObject = stream;
      })
      .catch((error) => {
        console.error('Error accessing camera:', error);
      });
  }

  stopCamera() {
    if (this.mediaStream) {
      const tracks = this.mediaStream.getTracks();
      tracks.forEach((track) => track.stop());
      this.videoElement.nativeElement.srcObject = null;
      this.mediaStream = null;
    }
  }

  isCameraActive(): boolean {
    return !!this.mediaStream;
  }
}
