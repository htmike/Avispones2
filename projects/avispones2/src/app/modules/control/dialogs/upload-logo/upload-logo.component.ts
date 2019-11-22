import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSelect } from '@angular/material';
import { ThumbnailService } from 'projects/avispones2/src/app/services/thumbnail.service';
import { Team } from '../../../screen/classes/team';
import { ScoreService } from 'projects/avispones2/src/app/services/score.service';

@Component({
  selector: 'app-upload-logo',
  templateUrl: './upload-logo.component.html',
  styleUrls: ['./upload-logo.component.sass']
})
export class UploadLogoComponent implements OnInit {
  team: MatSelect;

  constructor( private ref: MatDialogRef<any>, private thumbnail: ThumbnailService, private scoreService: ScoreService ) { }

  ngOnInit() {
  }

  close() {
    this.ref.close();
  }

  upload( file: any, team: string ) {
    this.thumbnail.transform( file, 80, 80 ).subscribe( data => {
      let local: Team;
      local = JSON.parse(localStorage.getItem(team)) || '';
      local.logo = data;
      this.scoreService.updateScoreById( local.id, local );
      this.ref.close();
    });
  }

}
