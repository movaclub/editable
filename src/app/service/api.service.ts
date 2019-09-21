import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tabular } from '../interface/tabular';
import {map, take} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ApiService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<Tabular[]> {
    return this.http.get<Tabular[]>('../../../assets/fakeUsers.json');
  }

}
