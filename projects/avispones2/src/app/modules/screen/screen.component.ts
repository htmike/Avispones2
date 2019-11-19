import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../../services/score.service';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.sass']
})
export class ScreenComponent implements OnInit {

  constructor( public scoreService: ScoreService ) {}

  ngOnInit() {
  }
}
