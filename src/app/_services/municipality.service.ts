import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Municipality } from '../_models/municipality';

@Injectable({
  providedIn: 'root'
})
export class MunicipalityService {
  baseUrl: string = `${environment.baseUrl}/api/test/municipalities`;

  constructor(private http: HttpClient) {}


  //Get all Districts
  getAllMunicipalities(): Observable<Municipality[]> {
    return this.http.get<Municipality[]>(`${this.baseUrl}/districts/all`);
  }

  findByDistrictId(id: number): Observable<Municipality> {
    return this.http.get<Municipality>(`${this.baseUrl}/districts/${id}`);
  }
  getTotalAmountDisbursed(id:number){
    return this.http.get<number>(`${this.baseUrl}/totalDistrictAmountDisbursed/${id}`);
  }
}
