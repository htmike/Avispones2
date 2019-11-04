import { Component, OnInit } from '@angular/core';
import { Team } from './classes/team';
import { ScoreService } from '../../services/score.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.sass']
})
export class ScreenComponent implements OnInit {
  home: Team;
  guest: Team;
  fields: Array<any>;
  data: any;

  constructor( private scoreService: ScoreService ) {
    setInterval( () => {
      this.getScoreData();
    }, 2000 );
    this.data = {
      down: 0,
      toGo: 0,
      ballOn: 0,
      qtr: 0
    };
    this.setFields();
  }

  ngOnInit() {
  }

  setFields() {
    this.fields = [
      { name: 'down', value: this.data.down },
      { name: 'to go', value: this.data.toGo },
      { name: 'ball on', value: this.data.ballOn },
      { name: 'qtr', value: this.data.qtr },
    ];
  }
  getScoreData() {
    this.scoreService.getScoreById(1).subscribe( (score: Team) => {
      this.home = score;
    });
    this.scoreService.getScoreById(2).subscribe( (score: Team) => {
      this.guest = score;
    });
    this.scoreService.getExtra().subscribe( data => {
      this.data = data;
      this.setFields();
    });
  }
}
