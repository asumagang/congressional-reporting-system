import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ActiveusersRoutingModule } from './activeusers-routing.module';
import { ActiveusersComponent } from './activeusers.component';

import { RouterModule } from '@angular/router';
import { EdituserComponent } from './edituser/edituser.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [ActiveusersComponent, EdituserComponent, DeleteuserComponent],
  imports: [
    CommonModule,
    ActiveusersRoutingModule,
    FormsModule,
    NgbPaginationModule,
    NgbModalModule,
    RouterModule,
    NgbModule
  ],
  entryComponents:[EdituserComponent,DeleteuserComponent]

})
export class ActiveusersModule { }
