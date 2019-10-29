import { Component, OnInit } from '@angular/core';
import { Team } from '../screen/classes/team';
import { MatDialog } from '@angular/material';
import { UploadLogoComponent } from './dialogs/upload-logo/upload-logo.component';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.sass']
})
export class ControlComponent implements OnInit {
  teamHome: Team;
  teamGuest: Team;
  screen: Window;

  constructor( private dialog: MatDialog ) {
    this.teamHome = new Team();
    this.teamGuest = new Team('guest');
  }

  ngOnInit() {
  }

  openScreen() {
    this.screen = window.open('/pantalla', 'screen', 'height=172, width=384, resize=false');
  }
  closeScreen() {
    this.screen.close();
  }

  openModal() {
    this.dialog.open( UploadLogoComponent );
  }

}
