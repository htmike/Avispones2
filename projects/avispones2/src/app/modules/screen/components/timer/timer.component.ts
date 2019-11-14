import { Component } from '@angular/core';
import { Timer } from '../../classes/timer';
import { TimerService } from 'projects/avispones2/src/app/services/timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.sass']
})
export class TimerComponent {

  constructor( public timerService: TimerService ) {
  }


}
