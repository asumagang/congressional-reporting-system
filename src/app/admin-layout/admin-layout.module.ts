import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule, NgbToastModule} from '@ng-bootstrap/ng-bootstrap';


import { DashboardComponent } from '../dashboard/dashboard.component';
import { ReportsComponent } from '../reports/reports.component';
import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { AdminLayoutComponent } from './admin-layout.component';


@NgModule({
  declarations: [DashboardComponent,ReportsComponent,AdminLayoutComponent],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgbToastModule
  ]
})
export class AdminLayoutModule { }
