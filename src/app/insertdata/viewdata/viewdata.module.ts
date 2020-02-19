import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbModalModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { ViewdataRoutingModule } from './viewdata-routing.module';
import { ViewdataComponent } from './viewdata.component';


@NgModule({
  declarations: [ViewdataComponent],
  imports: [
    CommonModule,
    ViewdataRoutingModule,
    FormsModule,
    NgbPaginationModule,
    NgbModalModule,
    RouterModule,
    NgbModule
  ],
  entryComponents:[]
})
export class ViewdataModule { }
