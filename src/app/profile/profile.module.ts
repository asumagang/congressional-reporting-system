import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';


import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@NgModule({
  declarations: [ProfileComponent, EditProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    NgbPaginationModule,
    NgbModalModule,
    RouterModule,
  ],
  entryComponents:[EditProfileComponent]
})
export class ProfileModule { }
