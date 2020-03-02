import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Province } from '../_models/province';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {
  baseUrl: string = `${environment.baseUrl}/api/test/provinces`;
  constructor(private http: HttpClient) {}

  
  //Get all programs : /programs/all
  getAllProvinces(): Observable<Province[]> {
    return this.http.get<Province[]>(`${this.baseUrl}/all`);
  }
}
