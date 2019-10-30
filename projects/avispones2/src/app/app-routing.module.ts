import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/control', pathMatch: 'full' },
  { path: 'control', loadChildren: () => import ('./modules/control/control.module').then( m => m.ControlModule) },
  { path: 'pantalla', loadChildren: () => import ('./modules/screen/screen.module').then( m => m.ScreenModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
