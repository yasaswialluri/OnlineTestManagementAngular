import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewtestComponent } from './viewtest/viewtest.component';
import { ViewdiagnosticcenterComponent } from './viewdiagnosticcenter/viewdiagnosticcenter.component';


const routes: Routes = [
  { path: 'listtest/:id', component: ViewtestComponent },
  { path: 'listcenter', component: ViewdiagnosticcenterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
