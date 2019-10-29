import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Team } from '../../../screen/classes/team';
import { ScoreService } from 'projects/avispones2/src/app/services/score.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-team-control',
  templateUrl: './team-control.component.html',
  styleUrls: ['./team-control.component.sass']
})
export class TeamControlComponent implements OnInit {
  @Input() team: Team;
  teamScore: FormGroup;

  constructor( private scoreService: ScoreService, private notify: MatSnackBar ) {
  }

  ngOnInit() {
    this.teamScore = new FormGroup({
      name: new FormControl(this.team.name),
      score: new FormControl(this.team.score)
    });
  }

  updateScore() {
    this.scoreService.update(this.team.name);
  }
}
