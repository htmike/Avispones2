import { Component } from '@angular/core';
import { Timer } from '../../classes/timer';
import { TimerService } from 'projects/avispones2/src/app/services/timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.sass']
})
export class TimerComponent {
  timer: Timer;

  constructor( private timerService: TimerService ) {
    this.timer = new Timer();
    setInterval( () => {
      timerService.getTimer().subscribe( data => {
        this.timer.minutes = data.timer.split(':')[0];
        this.timer.seconds = data.timer.split(':')[1];
      });
    }, 500);
  }


}
