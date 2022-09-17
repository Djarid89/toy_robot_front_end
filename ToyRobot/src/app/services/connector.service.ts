import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IPlace } from '../interfaces/shared';

@Injectable({
  providedIn: 'root'
})
export class ConnectorService {
  place$ = new Subject<IPlace>();
  setX$ = new Subject<number | undefined>();
  setY$ = new Subject<number | undefined>();
}
