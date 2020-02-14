import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivitylogRoutingModule } from './activitylog-routing.module';
import { ActivitylogComponent } from './activitylog.component';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ActivitylogComponent],
  imports: [
    CommonModule,
    ActivitylogRoutingModule,
    FormsModule,
    NgbPaginationModule,
    NgbModalModule,
    RouterModule,
  ],
  entryComponents:[ ]
})
export class ActivitylogModule { }
