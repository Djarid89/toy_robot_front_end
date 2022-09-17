import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConnectorService } from 'src/app/services/connector.service';

@Component({
  selector: 'app-left-border',
  templateUrl: './left-border.component.html',
  styleUrls: ['./left-border.component.scss']
})
export class LeftBorderComponent implements OnDestroy {
  @Input() dim!: number[];
  setXSubs: Subscription;
  placeNumber = 0;

  constructor(private readonly connector: ConnectorService) {
    this.setXSubs = this.connector.setX$.subscribe({
      next: (placeNumber: number) => this.placeNumber = placeNumber
    });
  }

  ngOnDestroy(): void {
   this.setXSubs?.unsubscribe(); 
  }
}
