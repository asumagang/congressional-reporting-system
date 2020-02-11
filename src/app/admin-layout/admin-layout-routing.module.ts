import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ReportsComponent } from '../reports/reports.component';
import { AdminLayoutComponent } from './admin-layout.component';

const routes: Routes = [
  {
    path: '', component: AdminLayoutComponent, children: [
      {
        path: 'dashboard', component: DashboardComponent
      },
      {
        path: 'reports', component: ReportsComponent
      },
      { path: 'insertdata', loadChildren: () => import(`../insertdata/insertdata.module`).then(m => m.InsertdataModule) },
      {
        path: '', redirectTo: 'dashboard', pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
