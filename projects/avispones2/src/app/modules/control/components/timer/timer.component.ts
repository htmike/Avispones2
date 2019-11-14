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
    this.timer = new FormControl('');
  }

  ngOnInit() {
  }

  playTimer() {
    this.timerService.timerData = JSON.stringify(this.timer.value);
    this.timerService.playTimer( this.timerService.timerData );
  }

  pauseTimer() {
    this.timerService.pauseTimer();
    this.timer.setValue( this.timerService.timerData );
  }

  resetTimer() {
    this.timerService.resetTimer();
    this.timer.setValue( this.timerService.timerData );
  }

}
