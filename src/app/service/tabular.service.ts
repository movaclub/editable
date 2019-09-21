import { Injectable } from '@angular/core';
import {BehaviorSubject, from, Observable, range} from 'rxjs';
// import { of } from 'rxjs';

import { ApiService } from './api.service';

import { States } from '../interface/states';
import { Tabular } from '../interface/tabular';
import { Controls } from '../interface/controls';

@Injectable({
  providedIn: 'root'
})
export class TabularService {

  private stateSubject: BehaviorSubject<States>;
  private tabularData: Tabular[];

  constructor( private apiService: ApiService ) {
    // this.stateSubject = new BehaviorSubject<States>(this.getInitState());
  }

  // initial data set
  // cursor: 0, per page = 10
  public getInitState(): Observable<Tabular[]> {
    return this.apiService.getUsers();
    // return {
    //   tabular: ,
    //   controls: {
    //     cursor: 0,
    //     perPage: 10
    //   }
    // };
  }

  // current/initial state to UI
  public getCurState(): Observable<States> {
    return this.stateSubject;
  }

  // current data/state shaper
  // public curShaper( datum: Observable<Tabular[]>, control: Controls): Observable<Tabular[]> {
  //   let takeRange: Observable<Tabular[]>;
  //   if( control.cursor !=== undefined && control.perPage > 0 ){
  //     datum.forEach()
  //   }
  //   return takeRange;
  // }

  // private fnPerPage(item, index, control){
  //   if ( index >= control.cursor && takeRange.length < control.perPage ) {
  //     takeRange.push(item);
  //   }
  // }

}
