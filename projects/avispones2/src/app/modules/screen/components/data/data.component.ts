import { Component, OnInit, Input } from '@angular/core';
import { ScoreService } from 'projects/avispones2/src/app/services/score.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.sass']
})
export class DataComponent implements OnInit {

  constructor( public scoreService: ScoreService ) { }

  ngOnInit() {
  }

}
