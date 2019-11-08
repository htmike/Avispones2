import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  url: string;
  timer: any;
  timerData: string;

  constructor( private http: HttpClient ) {
    this.url = 'http://localhost:7373/';
    this.getTimer().subscribe( timer => {
      this.timer = timer;
    });
  }

  getTimer(): Observable<any> {
    return this.http.get(this.url + 'timer');
  }

  playTimer( timer: string ): string {
    this.pauseTimer();
    let mins: number = parseInt(timer.split(':')[0], 10);
    let secs: number = parseInt(timer.split(':')[1], 10);
    this.timer = setInterval( () => {
      if ( secs <= 0 && mins <= 0 ) { clearInterval(this.timer); }
      if ( secs <= 0) {
        secs = 59;
        --mins;
      } else {
        --secs;
      }
      this.timerData = `${mins}:${secs}`;
      this.sendTimer(this.timerData).subscribe();
    }, 1000 );
    return this.timerData;
  }

  pauseTimer() {
    clearInterval(this.timer);
  }

  resetTimer() {
    this.timerData = '15:00';
    this.sendTimer(this.timerData).subscribe();
  }

  sendTimer( timer: string ) {
    const headers = new HttpHeaders({'Content-type': 'application/json'});
    return this.http.post( this.url + 'timer', { timer }, { headers } );
  }
}
