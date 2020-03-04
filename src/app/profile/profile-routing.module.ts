import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { MyreportsComponent } from './myreports/myreports.component';
import { PasswordsettingsComponent } from './passwordsettings/passwordsettings.component';


const routes: Routes = [
  {
    path: '', component: ProfileComponent, children: [
      { path: 'myprofile', component: MyprofileComponent },
      { path: 'myreports', component: MyreportsComponent},
      { path: 'passwordsettings', component: PasswordsettingsComponent},
      {
        path: '', redirectTo: 'myprofile', pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
