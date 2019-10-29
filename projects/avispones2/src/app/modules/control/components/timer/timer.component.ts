import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.sass']
})
export class TimerComponent implements OnInit {
  timerForm: FormGroup;

  constructor() {
    this.timerForm = new FormGroup({
      timer: new FormControl('15:00')
    });
  }

  ngOnInit() {
  }

}
