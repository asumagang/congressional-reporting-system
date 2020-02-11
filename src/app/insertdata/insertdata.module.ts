import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsertdataRoutingModule } from './insertdata-routing.module';
import { InsertdataComponent } from './insertdata.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [InsertdataComponent, ListComponent],
  imports: [
    CommonModule,
    InsertdataRoutingModule
  ]
})
export class InsertdataModule { }
