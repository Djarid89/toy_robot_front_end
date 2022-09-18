import { Component, HostListener, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { KEY_CODE, Move } from 'src/app/interfaces/shared';
import { ConnectorService } from 'src/app/services/connector.service';
import { Robot } from '../class/shared';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnDestroy {
  @HostListener('window:keyup', ['$event']) keyEvent(event: KeyboardEvent) {
    if(!this.robot) {
      return;
    }

    if(event.key === KEY_CODE.RIGHT_ARROW) {
      this.connector.turn$.next(Move.RIGHT);
    } else if(event.key === KEY_CODE.LEFT_ARROW) {
      this.connector.turn$.next(Move.LEFT);
    } else if(event.key === KEY_CODE.ENTER) {
      this.connector.move$.next();
    } else if(event.key === KEY_CODE.R) {
      this.connector.writeReport$.next(this.robot.getReport());
    }
  }

  dim: number[];
  revDim: number[];
  placeSubs: Subscription;
  reportSubs: Subscription;
  private turnSubs!: Subscription;
  private moveSubs!: Subscription;
  robot!: Robot;

  constructor(private readonly connector: ConnectorService) {
    this.dim = [0, 1, 2, 3, 4];
    this.revDim = this.dim.slice().reverse();
    this.placeSubs = this.connector.place$.subscribe({
      next: (robot: Robot) => this.robot = robot
    });
    this.reportSubs = this.connector.report$.subscribe({
      next: () => this.connector.writeReport$.next(this.robot?.getReport() || '')
    });
    this.turnSubs = this.connector.turn$.subscribe({
      next: (move: Move) => {
        if(this.robot) {
          this.robot.turn(move)
        }
      }
    });
    this.moveSubs = this.connector.move$.subscribe({
      next: () => {
        if(this.robot) {
          this.robot.move(this.connector)
        }
      }
    });
  }

  getRobot(y: number, x: number): Robot | undefined {
    if(this.robot && this.robot.x === x && this.robot.y === y) {
      return this.robot;
    }
    return undefined;
  }

  ngOnDestroy(): void {
    this.placeSubs?.unsubscribe();
    this.reportSubs?.unsubscribe();
    this.turnSubs?.unsubscribe();
    this.moveSubs?.unsubscribe();
  }
}
