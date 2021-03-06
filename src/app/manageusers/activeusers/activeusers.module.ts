import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ActiveusersRoutingModule } from './activeusers-routing.module';
import { ActiveusersComponent } from './activeusers.component';

import { RouterModule } from '@angular/router';
import { EdituserComponent } from './edituser/edituser.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [ActiveusersComponent, EdituserComponent, DeleteuserComponent],
  imports: [
    CommonModule,
    ActiveusersRoutingModule,
    FormsModule,
    NgbPaginationModule,
    NgbModalModule,
    RouterModule,
    NgbModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
  ],
  entryComponents:[EdituserComponent]

})
export class ActiveusersModule { }
