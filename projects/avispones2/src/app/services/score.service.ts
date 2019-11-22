import { Injectable } from '@angular/core';
import { Team } from '../modules/screen/classes/team';
import { DataScore } from '../classes/data';

@Injectable({
  providedIn: 'root',

})
export class ScoreService {
  mainUrl: string;
  homeTeam: Team;
  guestTeam: Team;
  dataScore: DataScore;

  constructor() {
    this.homeTeam = new Team(1);
    this.guestTeam = new Team(2, 'Guest');
    setInterval( () => {
      this.getDataScore();
      this.getDataTeam();
    });
    this.dataScore = new DataScore();
  }

  updateScoreById( id: number, body: Team ): void {
    body.score = body.score > 99 ? 99 : body.score;
    body.name = body.name.length > 10 ? 'sin nombre' : body.name;
    const BODY = JSON.stringify(body);
    if ( id === 1 ) {
      this.homeTeam = body;
      localStorage.setItem('home', BODY);
    } else {
      this.guestTeam = body;
      localStorage.setItem('guest', BODY);
    }
  }

  updateExtra( body: DataScore ) {
    body.down = body.down > 4 ? 4 : body.down;
    body.toGo = body.toGo > 99 ? 99 : body.toGo;
    body.ballOn = body.ballOn > 99 ? 99 : body.ballOn;
    body.qtr = body.qtr > 4 ? 4 : body.qtr;
    this.dataScore = body;
    localStorage.setItem( 'dataScore', JSON.stringify(body));
  }

  getDataScore() {
    const LOCAL = localStorage.getItem('dataScore');
    this.dataScore = JSON.parse(LOCAL) || this.dataScore;
  }

  getDataTeam() {
    const HOME = localStorage.getItem('home');
    const GUEST = localStorage.getItem('guest');
    this.homeTeam = JSON.parse(HOME) || this.homeTeam;
    this.guestTeam = JSON.parse(GUEST) || this.guestTeam;
  }
}
