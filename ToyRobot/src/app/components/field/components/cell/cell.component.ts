import { Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { Robot } from 'src/app/components/class/shared';
import { Direction, Move } from 'src/app/interfaces/shared';
import { ConnectorService } from 'src/app/services/connector.service';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnDestroy, OnChanges {
  @Input() row!: number;
  @Input() col!: number;
  @Input() robot?: Robot;
  Direction = Direction;
  private turnSubs!: Subscription;
  private moveSubs!: Subscription;

  constructor(private readonly connector: ConnectorService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.robot.currentValue) {
      this.turnSubs = this.connector.turn$.subscribe({
        next: (move: Move) => this.robot?.turn(move)
      });
      this.moveSubs = this.connector.move$.subscribe({
        next: () => this.robot?.move(this.connector)
      });
    } else {
      this.turnSubs?.unsubscribe();
      this.moveSubs?.unsubscribe();
    }
  }

  ngOnDestroy(): void {
    this.turnSubs?.unsubscribe();
    this.moveSubs?.unsubscribe();
  }
}
