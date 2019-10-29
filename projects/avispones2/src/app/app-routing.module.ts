import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'pantalla', loadChildren: () => import ('./modules/screen/screen.module').then( m => m.ScreenModule) },
  { path: 'control', loadChildren: () => import ('./modules/control/control.module').then( m => m.ControlModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
