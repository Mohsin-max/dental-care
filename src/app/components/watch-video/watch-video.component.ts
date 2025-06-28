import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-watch-video',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './watch-video.component.html',
  styleUrl: './watch-video.component.css'
})
export class WatchVideoComponent {

  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;
  isPlaying = false;

  togglePlay() {
    const video = this.videoElement.nativeElement;
    if (this.isPlaying) {
      video.pause();
      this.isPlaying = false; // Set to false when pausing
    } else {
      video.play().catch(error => {
        console.error('Video play failed:', error); // Log any play errors
      });
      this.isPlaying = true; // Set to true when playing
    }
    // Removed the redundant this.isPlaying = !this.isPlaying to avoid state override
  }
}