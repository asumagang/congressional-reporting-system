import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {User} from '../_models/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = `${environment.baseUrl}/api/test/users`;
  constructor(private http: HttpClient) {}

  //Get 1 program from id : /programs/{id}
  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  //Get all programs : /programs/all
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/all`);
  }

   //Delete program : /program/{id}
   deleteUser(id: string): Observable<User> {
    return this.http.delete<User>(`${this.baseUrl}/${id}`);
  }

  //Update user : /users/{id}
  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/${user.id}`, user);
  }

    //Add program : /programs
    addUser(user: User): Observable<User> {
      return this.http.post<User>(this.baseUrl, user);
    }

}
