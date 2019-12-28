import { AgnosticComponent } from './agnostic/agnostic.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardStaticComponent } from './static/dashboard-static.component';

const routes: Routes = [
  {
    path: "",
    component: AgnosticComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
