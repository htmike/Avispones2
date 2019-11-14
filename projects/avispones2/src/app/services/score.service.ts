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

  updateScoreById( id: number, body: any ): void {
    const BODY = JSON.stringify(body);
    if ( id === 1 ) {
      this.homeTeam = body;
      localStorage.setItem('home', BODY);
    } else {
      this.guestTeam = body;
      localStorage.setItem('guest', BODY);
    }
  }

  updateExtra( body: any ) {
    this.dataScore = body;
    localStorage.setItem( 'dataScore', JSON.stringify(body));
    console.log(this.dataScore)
  }

  getDataScore() {
    const LOCAL = localStorage.getItem('dataScore');
    this.dataScore = JSON.parse(LOCAL);
  }

  getDataTeam() {
    const HOME = localStorage.getItem('home');
    const GUEST = localStorage.getItem('guest');
    this.homeTeam = JSON.parse(HOME);
    this.guestTeam = JSON.parse(GUEST);
  }
}
