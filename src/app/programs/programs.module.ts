import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramsRoutingModule } from './programs-routing.module';
import { ProgramsComponent } from './programs.component';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddProgramComponent } from '../add-program/add-program.component';
import { RouterModule } from '@angular/router';
import { ProgramDeleteComponent } from '../program-delete/program-delete.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [ProgramsComponent, AddProgramComponent, ProgramDeleteComponent],
  imports: [
    CommonModule,
    ProgramsRoutingModule,
    FormsModule,
    NgbPaginationModule,
    NgbModalModule,
    RouterModule,
    NgbModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,

  ],
  entryComponents:[AddProgramComponent, ProgramDeleteComponent]
})
export class ProgramsModule { }
