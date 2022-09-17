import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConnectorService } from 'src/app/services/connector.service';
import { Robot } from '../class/shared';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnDestroy {
  dim: number[];
  revDim: number[];
  placeSubs: Subscription;
  robot!: Robot;

  constructor(private readonly connector: ConnectorService) {
    this.dim = [0, 1, 2, 3, 4];
    this.revDim = this.dim.slice().reverse();
    this.placeSubs = this.connector.place$.subscribe({
      next: (robot: Robot) => this.robot = robot
    });
  }

  getRobot(y: number, x: number): Robot | undefined {
    if(this.robot && this.robot.x === x && this.robot.y === y) {
      return this.robot;
    }
    return undefined;
  }

  getCol(vertIndex: number): number {
    return this.dim.length - vertIndex - 1;
  }

  ngOnDestroy(): void {
    this.placeSubs?.unsubscribe();
  }
}
