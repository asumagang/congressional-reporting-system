import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewdataComponent } from './viewdata.component';


const routes: Routes = [
  {
    path: "",
    component: ViewdataComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewdataRoutingModule { }
