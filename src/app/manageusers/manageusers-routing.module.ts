import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageusersComponent } from './manageusers.component';


const routes: Routes = [
  {
    path: '', component: ManageusersComponent, children: [
      { path: 'activeusers', loadChildren: () => import(`./activeusers/activeusers.module`).then(m => m.ActiveusersModule) },
      { path: 'requests', loadChildren: () => import(`./requests/requests.module`).then(m => m.RequestsModule) },
      {
        path: '', redirectTo: 'activeusers', pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageusersRoutingModule { }
