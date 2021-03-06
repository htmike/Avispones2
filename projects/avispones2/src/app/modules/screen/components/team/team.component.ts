import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../../classes/team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.sass']
})
export class TeamComponent implements OnInit {
  @Input() team: Team;
  logoDefault: string;

  constructor() {
    this.logoDefault = 'assets/logo.png';
    this.team = new Team(1);
  }

  ngOnInit() {
  }

}
