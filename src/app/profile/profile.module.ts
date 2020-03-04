import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';


import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { MyreportsComponent } from './myreports/myreports.component';
import { PasswordsettingsComponent } from './passwordsettings/passwordsettings.component';

@NgModule({
  declarations: [ProfileComponent, EditProfileComponent, MyprofileComponent, MyreportsComponent, PasswordsettingsComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    NgbPaginationModule,
    NgbModalModule,
    RouterModule,
  ],

})
export class ProfileModule { }
