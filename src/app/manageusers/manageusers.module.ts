import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule, NgbToastModule} from '@ng-bootstrap/ng-bootstrap';

import { ManageusersRoutingModule } from './manageusers-routing.module';
import { ManageusersComponent } from './manageusers.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [ManageusersComponent],
  imports: [
    CommonModule,
    ManageusersRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbToastModule,
    NgxPaginationModule,
  ]
})
export class ManageusersModule { }
