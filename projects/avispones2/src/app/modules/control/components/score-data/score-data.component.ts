import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ScoreService } from 'projects/avispones2/src/app/services/score.service';

@Component({
  selector: 'app-score-data',
  templateUrl: './score-data.component.html',
  styleUrls: ['./score-data.component.sass']
})
export class ScoreDataComponent implements OnInit {
  scoreForm: FormGroup;

  constructor( private scoreService: ScoreService ) {
    this.scoreForm = new FormGroup({
      down: new FormControl('1', [Validators.min(0), Validators.max(99)]),
      toGo: new FormControl('10', [Validators.min(0), Validators.max(99)]),
      ballOn: new FormControl('30', [Validators.min(0), Validators.max(99)]),
      qtr: new FormControl('1', [Validators.min(0), Validators.max(99)])
    });
  }

  ngOnInit() {
  }

  updateScore() {
    this.scoreService.updateExtra( this.scoreForm.value);
  }

}
