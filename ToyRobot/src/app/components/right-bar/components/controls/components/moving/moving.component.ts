import { Component } from '@angular/core';
import { Direction, Move } from 'src/app/interfaces/shared';
import { ConnectorService } from 'src/app/services/connector.service';

@Component({
  selector: 'app-moving',
  templateUrl: './moving.component.html',
  styleUrls: ['./moving.component.scss']
})
export class MovingComponent {
  Direction = Direction;
  Move = Move;

  constructor(private readonly connector: ConnectorService) { }

  turn(move: Move): void {
    this.connector.turn$.next(move);
  }

  move(): void {
    this.connector.move$.next();
  }

  report(): void {
    this.connector.report$.next();
  }
}
