import { Injectable } from '@angular/core';
import { Representative } from '../_models/representative';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class RepresentativeService {
  private baseUrl: string = "http://localhost:8080/api";


  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  getAllRepresentatives(): Observable<any> {
    return this.http.get(`${this.baseUrl}/representaives`);
  }
}
