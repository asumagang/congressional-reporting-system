import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { PdfReport } from '../_models/pdfreport';

@Injectable({
  providedIn: 'root'
})
export class PdfreportService {
  baseUrl: string = `${environment.baseUrl}/api/test/pdfReport`;
  constructor(private http: HttpClient) {}

  getAllPdfReports(): Observable<PdfReport[]> {
    return this.http.get<PdfReport[]>(`${this.baseUrl}/all`);
  }
}
