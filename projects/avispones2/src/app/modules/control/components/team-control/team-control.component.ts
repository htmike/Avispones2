import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
      id: new FormControl(this.team.id),
      name: new FormControl(this.team.name, [Validators.maxLength(10)]),
      score: new FormControl(this.team.score, [Validators.min(0), Validators.max(99)])
    });
  }

  updateScore() {
    const body = this.teamScore.value;
    const message = this.scoreService.updateScoreById(this.team.id, body);
  }
}
