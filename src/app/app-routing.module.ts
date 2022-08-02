import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TimeEntryComponent} from "./time-entry/time-entry.component";
import {TeamComponent} from "./team/team.component";

const routes: Routes = [
 {path:"entry", component: TimeEntryComponent},
  {path:"team", component: TeamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TimeEntryComponent, TeamComponent]
