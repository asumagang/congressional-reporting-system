import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UploadComponent } from './upload/upload.component';
import { PdfReport } from '../_models/pdfreport';
import { PdfreportService } from '../_services/pdfreport.service';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements OnInit {
pdfReports:PdfReport[];
  constructor(
    private modalService: NgbModal,
    private pdfReportService:PdfreportService
  ) { }

  ngOnInit() {
  }
  openUploadFrom(){
    this.modalService.open(UploadComponent,{ size: 'lg',centered: true,});
  }
  LoadPDFs(){
    this.pdfReportService.getAllPdfReports().subscribe(data => {
      this.pdfReports = data;
    });
  }

}
