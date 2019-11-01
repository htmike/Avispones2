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
  home: Observable<Team>;
  guest: Observable<Team>;
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
    this.home = this.scoreService.getScoreById(1);
    this.guest = this.scoreService.getScoreById(2);
    this.scoreService.getExtra().subscribe( data => {
      this.data = data;
      this.setFields();
    });
  }
}
