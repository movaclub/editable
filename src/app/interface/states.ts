import { Tabular } from '../interface/tabular'; // data
import { Controls } from '../interface/controls'; // current state values, if any
import { Observable } from 'rxjs';

export interface States {
  tabular: Tabular[];
  controls: Controls;
}
