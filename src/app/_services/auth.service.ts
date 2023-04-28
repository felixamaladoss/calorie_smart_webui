import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user,selectedGender, selectedActivity): Observable<any> {
    console.log(`gender value  ${selectedGender}`);
    console.log(`activity selected value  ${selectedActivity}`);
    return this.http.post(AUTH_API + 'signup', {
      name: user.name,
      username: user.username,
      email: user.email,
      password: user.password,
      gender: selectedGender,
      height: user.height,
      weight: user.weight,
      age: user.age,
      activity: selectedActivity
    }, httpOptions);
  }
}
