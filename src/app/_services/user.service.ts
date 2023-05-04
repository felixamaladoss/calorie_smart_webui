import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserProfile(): Observable<any> {
    return this.http.get(API_URL + 'profile/my', { responseType: 'json' });
  } 

  getUserBoard(date: string): Observable<any> {
    console.log("date" + date)
    return this.http.get(API_URL + 'food-intake/my?inputDate=' +date, { responseType: 'json' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}
