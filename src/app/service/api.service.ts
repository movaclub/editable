// API data service(users): https://jsonplaceholder.typicode.com/users
import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
// import { BehaviorSubject } from 'rxjs';

import { Tabular } from '../interface/tabular';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<Tabular[]> {
    return this.http.get<Tabular[]>('http://jsonplaceholder.typicode.com/users');
  }
}
