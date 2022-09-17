import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IRobot } from '../interfaces/shared';

@Injectable({
  providedIn: 'root'
})
export class ConnectorService {
  place$ = new Subject<IRobot>();
  setX$ = new Subject<number>();
  setY$ = new Subject<number>();
}
