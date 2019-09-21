import { Component, OnInit } from '@angular/core';
import { TabularService } from '../../service/tabular.service';
import { Tabular } from '../../interface/tabular';
import { Controls } from '../../interface/controls';
import { States } from '../../interface/states';
import {Observable} from 'rxjs';

import { ApiService } from '../../service/api.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-datum',
  templateUrl: './datum.component.html',
  styleUrls: ['./datum.component.scss']
})
export class DatumComponent implements OnInit {

  states: States;
  userList$: Observable<Tabular[]>;
  userList: Tabular[];
  controls: Controls;

  constructor(private apiService: ApiService ) { }

  ngOnInit() {
    this.userList$ = this.apiService.getUsers();
    console.log('USERLIST: ', this.userList$);
    this.apiService.getUsers()
      .subscribe(
        cur => this.getTen(cur).then( res => this.userList = res )
      );
    console.log('USERLIST---: ', this.userList);

  }

  async getTen(list: Tabular[]): Promise<Tabular[]> {
    return await list.splice(0, 10);
  }

}
