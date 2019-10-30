import { Component, OnInit } from '@angular/core';
import { Team } from './classes/team';
import { ScoreService } from '../../services/score.service';

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
    this.home = new Team(1);
    this.guest = new Team(2, 'guest');
    this.data = {
      down: 0,
      toGo: 0,
      ballOn: 0,
      qtr: 0
    };
    this.setFields();
  }

  ngOnInit() {
    this.scoreService.getScoreById(1).subscribe( (data: Team) => {
      this.home = data;
    });
    this.scoreService.getScoreById(2).subscribe( (data: Team) => {
      this.guest = data;
    });
    this.scoreService.getExtra().subscribe( data => {
      this.data = data;
      this.setFields();
    });
  }

  setFields() {
    this.fields = [
      { name: 'down', value: this.data.down },
      { name: 'to go', value: this.data.toGo },
      { name: 'ball on', value: this.data.ballOn },
      { name: 'qtr', value: this.data.qtr },
    ];
  }
}
