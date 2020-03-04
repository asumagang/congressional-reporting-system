import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { RepresentativesRoutingModule } from './representatives-routing.module';
import { RepresentativesComponent } from './representatives.component';


@NgModule({
  declarations: [RepresentativesComponent],
  imports: [
    CommonModule,
    RepresentativesRoutingModule,
    FormsModule,
    NgbPaginationModule,
    NgbModalModule,
    RouterModule,
  ],
  entryComponents:[]
})
export class RepresentativesModule { }
