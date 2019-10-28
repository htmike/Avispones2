import { Component, OnInit } from '@angular/core';
import { Team } from './classes/team';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.sass']
})
export class ScreenComponent implements OnInit {
  home: Team;
  guest: Team;
  fields: Array<any>;

  constructor() {
    this.home = new Team();
    this.guest = new Team('guest');
    this.fields = [
      { name: 'down', value: 0 },
      { name: 'to go', value: 0 },
      { name: 'ball on', value: 0 },
      { name: 'qtr', value: 0 }
    ];
  }

  ngOnInit() {
  }

}
