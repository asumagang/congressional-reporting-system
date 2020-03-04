import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsertdataComponent } from './insertdata.component';


const routes: Routes = [
  {
    path: '', component: InsertdataComponent, children: [
      { path: 'viewdata', loadChildren: () => import(`./viewdata/viewdata.module`).then(m => m.ViewdataModule) },
      { path: 'representatives', loadChildren: () => import(`./representatives/representatives.module`).then(m => m.RepresentativesModule)},
      {
        path: '', redirectTo: 'viewdata', pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsertdataRoutingModule { }
