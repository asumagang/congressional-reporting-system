import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ReportsComponent } from '../reports/reports.component';
import { AdminLayoutComponent } from './admin-layout.component';
import { InsertdataformComponent } from '../insertdataform/insertdataform.component';

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
      { path: 'programs', loadChildren: () => import(`../programs/programs.module`).then(m => m.ProgramsModule) },
      { path: 'profile', loadChildren: () => import(`../profile/profile.module`).then(m => m.ProfileModule) },
      { path: 'manageusers', loadChildren: () => import(`../manageusers/manageusers.module`).then(m => m.ManageusersModule) },
      { path: 'activitylog', loadChildren: () => import(`../activitylog/activitylog.module`).then(m => m.ActivitylogModule) },
      { path: 'scanner', loadChildren: () => import(`../scanner/scanner.module`).then(m => m.ScannerModule) },
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
