import { Component, OnInit } from '@angular/core';
import { Tabular } from '../../interface/tabular';
// import { Controls } from '../../interface/controls';
import { States } from '../../interface/states';

import { ApiService } from '../../service/api.service';
import {catchError, distinctUntilChanged, filter, map, tap} from 'rxjs/operators';
import {Controls} from '../../interface/controls';

@Component({
  selector: 'app-datum',
  templateUrl: './datum.component.html',
  styleUrls: ['./datum.component.scss']
})
export class DatumComponent implements OnInit {

  public editThis = {
    company: null, // >=0 means a Co. record is chosen for editing
    fname: null, // maybe in the future...
    lname: null // ...
  };

  public userList: Tabular[];
  public controls: Controls;

  constructor(private apiService: ApiService ) { }

  ngOnInit() {
    this.getData();
  }

  private getData(): void {
    this.apiService.curStates
      .subscribe( (res) => {
        this.controls = res.controls;
        this.userList = this.getCurState(res);
      });
  }

  getCurState(states: States): Tabular[] {

    if ( typeof(states.tabular) !== 'undefined' && states.tabular && states.tabular.length ) {
      return states.tabular.slice(states.controls.cursor, states.controls.cursor + states.controls.perPage);
    }

    return null;

  }

  toEdit(idx: number): void {
    console.log('toEdit-IDX: ', idx);
    this.editThis = {
      company: null,
      fname: null,
      lname: null
    };
    this.editThis.company = idx;
  }

  editControl(idx: number): void {
    console.log('editControl-IDX: ', idx);
    console.log('USRddata-IDX: ', this.userList[idx]);
    this.editThis = {
      company: null,
      fname: null,
      lname: null
    };

    this.apiService.updStates({tabular: this.userList, controls: this.controls});
  }

}
