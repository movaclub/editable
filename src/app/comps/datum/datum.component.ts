import { Component, OnInit } from '@angular/core';
import { Tabular } from '../../interface/tabular';
import { Controls } from '../../interface/controls';
import { States } from '../../interface/states';

import { ApiService } from '../../service/api.service';
import {map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

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
    this.apiService.curStates
      .subscribe( res => this.getStartState(res).then( rez => this.userList = rez) );
  }

  async getStartState(states: States): Promise<Tabular[]> {

    if ( typeof(states.tabular) !== 'undefined' && states.tabular && states.tabular.length ) {
      return await states.tabular.splice(states.controls.cursor, states.controls.perPage);
    }

    return null;

  }

}
