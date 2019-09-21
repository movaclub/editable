import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tabular } from '../interface/tabular';
import { BehaviorSubject } from 'rxjs';
import { States } from '../interface/states';

@Injectable({ providedIn: 'root' })
export class ApiService {

  private states: BehaviorSubject<States> = new BehaviorSubject<States>({tabular: null, controls: null});
  curStates = this.states.asObservable();
  constructor(private http: HttpClient) {
    this.getStartStates();
  }

  getStartStates(): void {
    this.http.get<Tabular[]>('../../../assets/fakeUsers.json')
      .subscribe( res => this.states.next({tabular: res, controls: {cursor: 0, perPage: 10}}) );
  }

}
