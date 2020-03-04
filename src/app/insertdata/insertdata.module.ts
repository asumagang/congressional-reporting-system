import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule, NgbToastModule} from '@ng-bootstrap/ng-bootstrap';
import { InsertdataRoutingModule } from './insertdata-routing.module';
import { InsertdataComponent } from './insertdata.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [InsertdataComponent],
  imports: [
    CommonModule,
    InsertdataRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgbToastModule,
    NgxPaginationModule,
  ]
})
export class InsertdataModule { }
