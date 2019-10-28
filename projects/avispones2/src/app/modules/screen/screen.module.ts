import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreenRoutingModule } from './screen-routing.module';
import { TeamComponent } from './components/team/team.component';
import { TimerComponent } from './components/timer/timer.component';
import { DataComponent } from './components/data/data.component';
import { ScreenComponent } from './screen.component';


@NgModule({
  declarations: [TeamComponent, TimerComponent, DataComponent, ScreenComponent],
  imports: [
    CommonModule,
    ScreenRoutingModule
  ]
})
export class ScreenModule { }
