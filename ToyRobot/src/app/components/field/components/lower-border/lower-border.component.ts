import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConnectorService } from 'src/app/services/connector.service';

@Component({
  selector: 'app-lower-border',
  templateUrl: './lower-border.component.html',
  styleUrls: ['./lower-border.component.scss']
})
export class LowerBorderComponent implements OnDestroy {
  @Input() dim!: number[];
  setYSubs: Subscription;
  placeNumber?: number

  constructor(private readonly connector: ConnectorService) {
    this.setYSubs = this.connector.setY$.subscribe({
      next: (placeNumber: number | undefined) => this.placeNumber = placeNumber
    });
  }

  ngOnDestroy(): void {
   this.setYSubs?.unsubscribe(); 
  }
}
