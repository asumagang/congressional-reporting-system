import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Program } from '../_models/program';
import { Observable } from 'rxjs';
import { Page } from '../_models/page';


@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  baseUrl: string = `${environment.baseUrl}/api/test/program`;
  constructor(private http: HttpClient) {}

  //Add program : /programs
  addProgram(program: Program): Observable<Program> {
    return this.http.post<Program>(this.baseUrl, program);
  }

  //Delete program : /program/{id}
  deleteProgram(id: string): Observable<Program> {
    return this.http.delete<Program>(`${this.baseUrl}/${id}`);
  }

  //Update user : /users/{id}
  updateProgram(program: Program): Observable<Program> {
    return this.http.put<Program>(`${this.baseUrl}/${program.id}`, program);
  }

  //Get all program with size and page : /users?page={page}
  getPrograms(
    pageNum: number,
    pageSize: number,
    searchText?: string
  ): Observable<Page<Program>> {
    let params = new HttpParams()
      .set("page", (pageNum - 1).toString())
      .set("size", pageSize.toString());
    if (searchText) {
      params = params
        .set("firstName", searchText)
        .set("lastName", searchText)
        .set("occupation", searchText);
    }
    return this.http.get<Page<Program>>(this.baseUrl, { params });
  }

  //Get 1 program from id : /programs/{id}
  getUser(id: string): Observable<Program> {
    return this.http.get<Program>(`${this.baseUrl}/${id}`);
  }

  //Get all programs : /programs/all
  getAllUsers(): Observable<Program[]> {
    return this.http.get<Program[]>(`${this.baseUrl}/all`);
  }
}
