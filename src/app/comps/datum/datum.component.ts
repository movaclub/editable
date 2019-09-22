import { Component, OnInit } from '@angular/core';
import { Tabular } from '../../interface/tabular';
// import { Controls } from '../../interface/controls';
import { States } from '../../interface/states';

import { ApiService } from '../../service/api.service';
import {catchError, distinctUntilChanged, filter, map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-datum',
  templateUrl: './datum.component.html',
  styleUrls: ['./datum.component.scss']
})
export class DatumComponent implements OnInit {

  // userList$: Observable<Tabular[]>;
  userList: Tabular[];

  constructor(private apiService: ApiService ) { }

  ngOnInit() {
    this.getData();
  }

  private getData(): void {
    this.apiService.curStates
      .subscribe( (res) => {
        this.userList = this.getCurState(res);
      });
  }

  getCurState(states: States): Tabular[] {

    if ( typeof(states.tabular) !== 'undefined' && states.tabular && states.tabular.length ) {
      return states.tabular.slice(states.controls.cursor, states.controls.cursor + states.controls.perPage);
    }

    return null;

  }

  // getCurState(states: States): Tabular[] {
  //
  //   if ( typeof(states.tabular) !== 'undefined' && states.tabular && states.tabular.length ) {
  //     const result = [];
  //     for (let i = states.controls.cursor; i < states.controls.cursor + states.controls.perPage; i++) {
  //       result.push(states.tabular[i]);
  //     }
  //     return result;
  //   }
  //
  //   return null;
  //
  // }

}
