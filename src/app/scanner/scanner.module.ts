import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScannerRoutingModule } from './scanner-routing.module';
import { ScannerComponent } from './scanner.component';

import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ScannerComponent],
  imports: [
    CommonModule,
    ScannerRoutingModule,
    FormsModule,
    NgbPaginationModule,
    NgbModalModule,
    RouterModule,
  ],
  entryComponents:[]
})
export class ScannerModule { }
