import { Component, OnInit } from '@angular/core';
import { Controls } from '../../interface/controls';
import { ApiService } from '../../service/api.service';
import {tap} from 'rxjs/operators';
import {Tabular} from '../../interface/tabular';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {

  public controls: Controls;
  public tabular: Tabular[];
  public editThis = {
    cursor: false,
    perPage: false
  };
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.curStates
      .pipe(
        tap( states => console.log('cStates: ', states))
      )
      .subscribe( (states) => {
        this.tabular = states.tabular;
        this.controls = states.controls; });
  }

  toEdit(name: string, val: string): void {
    this.editThis = {
      cursor: false,
      perPage: false
    };
    this.editThis[name] = true;
  }

  editControl(name: string, val: string): void {
    if (
      (name === 'cursor' || name === 'perPage')
      && val.length >= 0
    ) {
      this.controls[name] = parseInt(val, 10);
    }
    this.editThis = {
      cursor: false,
      perPage: false
    };

    this.apiService.updStates({tabular: this.tabular, controls: this.controls});
  }

}
