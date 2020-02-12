import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgramsComponent } from './programs.component';
import { ProgramlistComponent } from './programlist/programlist.component';


const routes: Routes = [
  {
    path: '', component: ProgramsComponent, children: [
      {
        path: 'programlist', component: ProgramlistComponent
      },
      {
        path: '', redirectTo: 'programlist', pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramsRoutingModule { }
