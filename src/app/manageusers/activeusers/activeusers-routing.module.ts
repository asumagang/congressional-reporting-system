import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveusersComponent } from './activeusers.component';


const routes: Routes = [
  {
    path: "",
    component: ActiveusersComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActiveusersRoutingModule { }
