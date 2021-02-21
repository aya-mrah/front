import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
private baseUrl = 'http://localhost:8080/api/users';
private baseUrl1 = 'http://localhost:8080/api/joueurs';
  constructor(private http: HttpClient) { }

    getUsersList(): Observable<any> {
        return this.http.get(`${this.baseUrl}`);
      }
      getJoueursList(): Observable<any> {
              return this.http.get(`${this.baseUrl1}`);
            }
}
