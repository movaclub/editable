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
  public tabular: Tabular[];
  public controls: Controls;

  constructor(private apiService: ApiService ) { }

  ngOnInit() {
    this.getData();
  }

  private getData(): void {
    this.apiService.curStates
      .subscribe( (res) => {
        this.controls = res.controls;
        this.tabular = res.tabular; // the full list
        this.userList = this.getCurState(res); // the list to display
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
    for ( const item of this.tabular ) {
      if ( item._id === this.userList[idx]._id ) {
        item.company = this.userList[idx].company;
      }
    }

    this.apiService.updStates({tabular: this.tabular, controls: this.controls});
  }

}
