import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsertdataComponent } from './insertdata.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
  {
    path: '', component: InsertdataComponent, children: [
      {
        path: 'list', component: ListComponent
      },
      {
        path: '', redirectTo: 'list', pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsertdataRoutingModule { }
