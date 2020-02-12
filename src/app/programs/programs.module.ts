import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramsRoutingModule } from './programs-routing.module';
import { ProgramsComponent } from './programs.component';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AddProgramComponent } from '../add-program/add-program.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [ProgramsComponent, AddProgramComponent],
  imports: [
    CommonModule,
    ProgramsRoutingModule,
    FormsModule,
    NgbPaginationModule,
    NgbModalModule,
    RouterModule,

  ]
})
export class ProgramsModule { }
