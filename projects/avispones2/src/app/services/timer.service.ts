import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  timer: any;
  timerData: string;

  constructor() {
    this.timerData = "15:00";
    setInterval( () => {
      this.timerData = localStorage.getItem('timer') || '15:00';
    });
  }

  playTimer( timer: string ): void {
    this.pauseTimer();
    let mins: number = parseInt(timer.split(':')[0], 10);
    let secs: number = parseInt(timer.split(':')[1], 10);
    this.timer = setInterval( () => {
      if ( secs <= 0 && mins <= 0 ) { this.pauseTimer(); }
      if ( secs <= 0) {
        secs = 59;
        --mins;
      } else {
        --secs;
      }
      this.timerData = `${mins}:${secs}`;
      this.setTimer(this.timerData);
    }, 1000 );
  }

  pauseTimer() {
    clearInterval(this.timer);
  }

  resetTimer() {
    this.pauseTimer()
    this.timerData = '15:00';
    this.setTimer(this.timerData);
  }

  setTimer( data: any ) {
    localStorage.setItem('timer', data);
  }
}
