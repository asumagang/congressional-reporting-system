import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScannerRoutingModule } from './scanner-routing.module';
import { ScannerComponent } from './scanner.component';

import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  declarations: [ScannerComponent, UploadComponent],
  imports: [
    CommonModule,
    ScannerRoutingModule,
    FormsModule,
    NgbPaginationModule,
    NgbModalModule,
    RouterModule,
  ],
  entryComponents:[UploadComponent]
})
export class ScannerModule { }
