import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UserAuthenticatedGuard } from "../auth/shared/guards/user-authenticated.guard";

const routes: Routes = [
  {
    path: "schedule",
    canActivate: [UserAuthenticatedGuard],
    loadChildren: "./schedule/schedule.module#ScheduleModule"
  },
  {
    path: "meals",
    canActivate: [UserAuthenticatedGuard],
    loadChildren: "./meals/meals.module#MealsModule"
  },
  {
    path: "workouts",
    canActivate: [UserAuthenticatedGuard],
    loadChildren: "./workouts/workouts.module#WorkoutsModule"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthRoutingModule {}
