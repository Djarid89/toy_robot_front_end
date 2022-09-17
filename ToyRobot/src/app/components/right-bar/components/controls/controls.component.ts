import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConnectorService } from 'src/app/services/connector.service';

enum State {
  Placing = 0,
  Moving
}

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnDestroy {
  state = State.Placing;
  State = State;
  placeSubs: Subscription;

  constructor(private readonly connector: ConnectorService) {
    this.placeSubs = this.connector.place$.subscribe({
      next: () => this.state = State.Moving
    });
  }

  ngOnDestroy(): void {
    this.placeSubs?.unsubscribe();
  }
}
