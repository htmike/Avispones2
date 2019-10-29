import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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
      down: new FormControl('0'),
      toGo: new FormControl('0'),
      ballOn: new FormControl('0'),
      qtr: new FormControl('0')
    });
  }

  ngOnInit() {
  }

  updateScore() {
    this.scoreService.updateExtra();
  }

}
