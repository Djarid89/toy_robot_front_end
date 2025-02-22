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
  placeNumber = 0;

  constructor(private readonly connector: ConnectorService) {
    this.setYSubs = this.connector.setY$.subscribe({
      next: (placeNumber: number) => this.placeNumber = placeNumber
    });
  }

  ngOnDestroy(): void {
   this.setYSubs?.unsubscribe(); 
  }
}
