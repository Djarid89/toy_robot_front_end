import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Robot } from '../components/class/shared';
import { Move } from '../interfaces/shared';

@Injectable({
  providedIn: 'root'
})
export class ConnectorService {
  place$ = new Subject<Robot>();
  setX$ = new Subject<number>();
  setY$ = new Subject<number>();
  turn$ = new Subject<Move>();
  move$ = new Subject<void>();
  report$ = new Subject<void>();
}
