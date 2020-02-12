import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: '', component: ProfileComponent, children: [
      {
        path: 'details', component: DetailsComponent
      },
      {
        path: '', redirectTo: 'details', pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
