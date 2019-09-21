// API data service(users): https://jsonplaceholder.typicode.com/users
// http://jsonplaceholder.typicode.com/users?_start=0&_limit=5
import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
// import { BehaviorSubject } from 'rxjs';

import { Tabular } from '../interface/tabular';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Tabular[]> {
    return this.http.get<Tabular[]>('../../../assets/fakeUsers.json');
  }
}
