import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tabular } from '../interface/tabular';
import { BehaviorSubject } from 'rxjs';
import { States } from '../interface/states';

@Injectable({ providedIn: 'root' })
export class ApiService {

  private startState: States = {tabular: null, controls: {cursor: 0, perPage: 20}};
  private states: BehaviorSubject<States> = new BehaviorSubject<States>(this.startState);
  curStates = this.states.asObservable();

  constructor(private http: HttpClient) {
    this.getStates(this.startState);
  }

  getStates(states: States): void {
    this.http.get<Tabular[]>('../../../assets/fakeUsers.json')
      .subscribe( res => this.states.next({tabular: res, controls: {cursor: states.controls.cursor, perPage: states.controls.perPage}}) );
  }

  updStates(states: States): void {
    this.states.next(states);
  }

}
