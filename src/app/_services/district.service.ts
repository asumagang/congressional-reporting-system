import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { District } from '../_models/district';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DistrictService {
  baseUrl: string = `${environment.baseUrl}/api/test/districts`;

  constructor(private http: HttpClient) {}

  //Add 
  addDistrict(district: District): Observable<District> {
    return this.http.post<District>(this.baseUrl, district);
  }

  //Delete 
  deleteDistrict(id: number): Observable<District> {
    return this.http.delete<District>(`${this.baseUrl}/${id}`);
  }

  //Update todo : /todos/{id}
  updateDistrict(district: District): Observable<District> {
    return this.http.put<District>(`${this.baseUrl}/${district.id}`, district);
  }

 

  //Get 
  getDistrict(id: number): Observable<District> {
    return this.http.get<District>(`${this.baseUrl}/${id}`);
  }

  getDistrictByProvinceId(id: number): Observable<District> {
    return this.http.get<District>(`${this.baseUrl}/province/${id}`);
  }

  findByProvinceId(id: number): Observable<District> {
    return this.http.get<District>(`${this.baseUrl}/province/${id}/districts`);
  }


  //Get all Districts
  getAllDistricts(): Observable<District[]> {
    return this.http.get<District[]>(`${this.baseUrl}/all`);
  }
}
