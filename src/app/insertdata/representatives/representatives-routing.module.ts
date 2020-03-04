import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepresentativesComponent } from './representatives.component';


const routes: Routes = [
  {
    path: "",
    component: RepresentativesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepresentativesRoutingModule { }
