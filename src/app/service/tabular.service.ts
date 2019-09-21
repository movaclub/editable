import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

import { States } from '../interface/states';
import { Tabular } from '../interface/tabular';

@Injectable({
  providedIn: 'root'
})
export class TabularService {

  constructor( private apiService: ApiService ) {}

}
