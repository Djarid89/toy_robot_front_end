import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICoordinate } from 'src/app/interfaces/shared';
import { ConnectorService } from 'src/app/services/connector.service';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnDestroy {
  dim = new Array(5);
  placeSubs: Subscription;
  robotCoordinate!: ICoordinate;

  constructor(private readonly connector: ConnectorService) {
    this.placeSubs = this.connector.place$.subscribe({
      next: (coordinate: ICoordinate) => this.robotCoordinate = coordinate
    });
  }

  isRobotHere(x: number, y: number): boolean {
    if(!this.robotCoordinate) {
      return false;
    }
    return this.robotCoordinate.x === x && this.robotCoordinate.y === y;
  }

  getCol(vertIndex: number): number {
    return this.dim.length - vertIndex - 1;
  }

  ngOnDestroy(): void {
    this.placeSubs?.unsubscribe();
  }
}
