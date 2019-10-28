import { Component } from '@angular/core';
import { Timer } from '../../classes/timer';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.sass']
})
export class TimerComponent {
  timer: Timer;

  constructor() {
    this.timer = new Timer();
  }

}
