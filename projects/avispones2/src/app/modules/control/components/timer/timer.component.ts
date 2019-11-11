import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TimerService } from 'projects/avispones2/src/app/services/timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.sass']
})
export class TimerComponent implements OnInit {
  timer: FormControl;

  constructor( private timerService: TimerService ) {
    this.timer = new FormControl('15:00');
  }

  ngOnInit() {
  }

  playTimer() {this.timerService.playTimer( this.timer.value);
  }

  pauseTimer() {
    this.timerService.pauseTimer();
  }

  resetTimer() {
    this.timerService.resetTimer();
  }

}
