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

    //Get all programs : /programs/all
    getAllDistricts(): Observable<District[]> {
      return this.http.get<District[]>(`${this.baseUrl}/provinces/all`);
    }
  
    findByProvinceId(id: number): Observable<District> {
      return this.http.get<District>(`${this.baseUrl}/provinces/${id}/districts`);
    }
 
}
