import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Tabular } from '../../interface/tabular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-datum',
  templateUrl: './datum.component.html',
  styleUrls: ['./datum.component.scss']
})
export class DatumComponent implements OnInit {

  userList$: Observable<Tabular[]>;
  constructor(private apiService: ApiService ) { }

  ngOnInit() {
    this.userList$ = this.apiService.getUsers();
  }

}
