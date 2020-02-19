import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Province } from '../_models/province';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {
  baseUrl: string = `${environment.baseUrl}/api/test/province`;
  constructor(private http: HttpClient) {}

  //Add program : /programs
  addProvince(province: Province): Observable<Province> {
    return this.http.post<Province>(this.baseUrl, province);
  }

  //Delete program : /program/{id}
  deleteProvince(id: string): Observable<Province> {
    return this.http.delete<Province>(`${this.baseUrl}/${id}`);
  }

  //Update user : /users/{id}
  updateProvince(province: Province): Observable<Province> {
    return this.http.put<Province>(`${this.baseUrl}/${province.id}`, province);
  }


  //Get 1 program from id : /programs/{id}
  getProvince(id: string): Observable<Province> {
    return this.http.get<Province>(`${this.baseUrl}/${id}`);
  }

  //Get all programs : /programs/all
  getAllProvinces(): Observable<Province[]> {
    return this.http.get<Province[]>(`${this.baseUrl}/all`);
  }
}
