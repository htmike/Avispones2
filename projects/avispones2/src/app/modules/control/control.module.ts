import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatInputModule, MatButtonModule, MatSnackBarModule, MatSelectModule,
  MatIconModule, MatToolbarModule, MatDialogModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { ControlRoutingModule } from './control-routing.module';
import { ControlComponent } from './control.component';
import { TeamControlComponent } from './components/team-control/team-control.component';
import { ScoreDataComponent } from './components/score-data/score-data.component';
import { TimerComponent } from './components/timer/timer.component';
import { UploadLogoComponent } from './dialogs/upload-logo/upload-logo.component';


@NgModule({
  declarations: [ControlComponent, TeamControlComponent, ScoreDataComponent, TimerComponent, UploadLogoComponent],
  imports: [
    CommonModule,
    ControlRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSelectModule
  ],
  entryComponents: [
    UploadLogoComponent
  ]
})
export class ControlModule { }
